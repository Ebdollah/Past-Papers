const express = require('express');
const cors = require('cors');
const databaseConnection = require('./db');
const User = require('./models/User'); 
const University = require('./models/University');
const Courses = require('./models/Courses');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

databaseConnection();

const app = express();
const port = 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

//####### Signup route #######
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password,country,city,university ,education,dob  } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists.' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
        country,
        city,
        university,
        education,
        dob
    });


    await newUser.save();

    res.status(201).json({ success: true, message: 'User created successfully.' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, message: 'An error occurred during signup.' });
  }
});

// ##### Login route  #####
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    // Create a JWT
    const token = jwt.sign({ id: user._id }, '0900', { expiresIn: '1h' });

    res.status(200).json({ success: true, token,role: user.role });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'An error occurred during login.' });
  }
});

// ### Add Course route #####
app.post('/api/addcourse', async (req, res) => {
  try {
    const courseData = req.body;

    // Check if course with the same coursecode already exists
    const existingCourse = await Courses.findOne({ coursecode: courseData.coursecode });
    if (existingCourse) {
      return res.status(409).json({ success: false, message: 'Course with the same course code already exists.' });
    }
    await Courses.insertMany(courseData);

    res.status(201).json({ success: true, message: 'Course added successfully.', });
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ success: false, message: 'An error occurred while adding the course.' });
  }
});

// ### Add Past Papers route #####
app.post('/api/addpaper', async (req, res) => {
  try {
    const paperData = req.body;
    //Check if same paper is already exist or not
    const existingPaper = await Papers.findOne({ pname: paperData.pname });
    if (existingPaper) {
      return res.status(409).json({ success: false, message: 'Paper with the same name already exists.' });
    }
    await Papers.insertMany(paperData);

    res.status(201).json({ success: true, message: 'Paper added successfully.', });
  } catch (error) {
    console.error('Error adding paper:', error);
    res.status(500).json({ success: false, message: 'An error occurred while adding the paper.' });
  }
});


// ##### Add university route  #####
app.post('/api/adduniversity', async (req, res) => {
  try {
    const universityData = req.body;

    // Check if university already exists
    const existUni = await University.findOne({ name: universityData.name });
    if (existUni) {
      return res.status(409).json({ message: 'University already exists.' });
    }
    await University.insertMany(universityData);


    res.status(201).json({ success: true, message: 'University created successfully.' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, message: 'An error occurred.' });
  }
});
// ##### Get university route  #####  
app.get('/api/getuniversity', async (req, res) => {
  try {
    const universityCount = await University.countDocuments({});
    res.status(201).json({ success: true, universityCount });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, message: 'An error occurred.' });
  }
});

// ### Get Count of Courses route #####
app.get('/api/getcoursescount', async (req, res) => {
  try {
    const coursesCount = await Courses.countDocuments();
    res.status(200).json({ success: true, coursesCount });
  } catch (error) {
    console.error('Error retrieving courses count:', error);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving courses count.' });
  }
});

// ### Get Courses route #####
app.get('/api/getcourses', async (req, res) => {
  try {
    const courses = await Courses.find();
    res.status(200).json({ success: true, courses });
  } catch (error) {
    console.error('Error retrieving courses:', error);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving courses.' });
  }
});

// ### Get Users Count #####
app.get('/api/getuserscount', async (req, res) => {
  try {
    const usersCount = await User.countDocuments({});
    res.status(200).json({ success: true, usersCount });
  } catch (error) {
    console.error('Error retrieving users count:', error);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving users count.' });
  }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);

});
