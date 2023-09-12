const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


// Define the project array before using it
const project = [
  {
    "id": 1,
    "ename": "Aditya Verma",
    "dept": "Accounting",
    "salary": "700000",
    "tax": "200000",
    "doj": "27-02-2020",
  },


  {
    "id": 2,
    "ename": "Atul Raj",
    "dept": "Accounting",
    "salary": "500000",
    "tax": "100000",
    "doj": "25-09-2020",
  },

  {
    "id": 3,
    "ename": "Vijay Kumar",
    "dept": "Finance",
    "salary": "900000",
    "tax": "300000",
    "doj": "18-07-2021",
  },


  {
    "id": 4,
    "ename": "Ashish Kumar",
    "dept": "Sales",
    "salary": "400000",
    "tax": "100000",
    "doj": "01-09-2018",
  },


  {
    "id": 5,
    "ename": "Yash Prabhakar",
    "dept": "Finance",
    "salary": "500000",
    "tax": "100000",
    "doj": "05-11-2021",
  },


  {
    "id": 6,
    "ename": "Preeti Prabha",
    "dept": "Accounting",
    "salary": "600000",
    "tax": "200000",
    "doj": "07-04-2022",
  },


  {
    "id": 7,
    "ename": "Adity Priya",
    "dept": "Management",
    "salary": "800000",
    "tax": "300000",
    "doj": "03-09-2021",
  },


  {
    "id": 8,
    "ename": "Jatin Raj",
    "dept": "Sales",
    "salary": "500000",
    "tax": "100000",
    "doj": "18-02-2021",
  },

  {
    "id": 9,
    "ename": "Asha Sharma",
    "dept": "Management",
    "salary": "700000",
    "tax": "200000",
    "doj": "22-03-2020",
  },


  {
    "id": 10,
    "ename": "Vipul Joshi",
    "dept": "Accounting",
    "salary": "600000",
    "tax": "200000",
    "doj": "05-08-2020",
  }
];


// home page
app.get('/', (req, res) => {
  res.send('SmartKnower API');
});


//Get user details
app.get('/userdetails', (req, res) => {

  const ud = project;
  res.json(ud);
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
