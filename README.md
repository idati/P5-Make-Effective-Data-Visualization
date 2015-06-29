# P5-Make-Effective-Data-Visualization --> Link to the animation: http://130.211.86.23/chart3.html

Summary - The original data are from Acer (dataset 2012), by using google bigquery I filter the important parts f.e. filtering "Openness for Problem Solving - Seek Explanations" i used the SQL query
"SELECT ST94Q09, AVG(PV1MATH) as Math as Weight FROM [pisaDataset2012] Group by ST94Q09" to filter the data.

The bar chart shows the students performance (I used PV1Math) on the y axis and the different answer possibilities on the x axis that are important to answer the question "The importance of school factors in explaining academic performance."

Here are the questions that I used for creating the animation:
ST77Q02 - Math Teaching - Extra help
ST87Q01 - Sense of Belonging - Feel Like Outsider
ST53Q02 - Learning Strategies- Improve Understanding vs. New Ways vs. Memory
IC02Q04 - At school - Internet connection
ST85Q01 - Classroom Management - Students Listen
ST88Q02 - Attitude towards School - Waste of Time
ST94Q09 - Openness for Problem Solving - Seek Explanations


Aid factor?

(1) Is Internet connection available for you to use at school?
    [AtSchoolInternetConnection.csv]

Interest factor?

(2) Describe Learning Strategies
    [LearningStrategies.csv]

(7) I seek explanatuins of things
    [seekExolanations.csv]

Teacher factor?

(4) how often do the teacher gives extra help?
    [TeacherExtraHelp.csv]

(5) My teacher gets students to listen to her
    [StudentsListen.csv]


Sozial/Attitude factor

(3) I feel like an outsider (or left out of things) at school
    [SenseofBelonging.csv]

(6) School has been a waste of time
    [WasteofTime.csv]

All files that where used in the first version are ending with *.v1!

The y-axis represents average values for all students.

Design - The decision to use bar chart was used because it is the easiest way to visualise two variables (student performance - have datatype integer and answers for different questions - have datatype string). When someone would ask why not Scatterplot I would answer, Scatterplot should be used when you have two variables with datatype integer to show some linear correlation. 

Feedback - My first version showed only the seven different bar charts, the first feedback - The animation was confusing, what is the message. The second Feedback asked for the story. 
From this two Feedback I added four Main factors, Aid factor, Interest factor, Teacher factor, Sozial/Attitude factor and also added some explaination to each chart. The last Feedback liked my animation.

For the auto format correction i used this free tool:
http://www.freeformatter.com/html-formatter.html

Resources:  
[*] http://pisa2012.acer.edu.au/downloads.php
[*] http://www.w3schools.com/
[*] http://busypeoples.github.io/post/testing-d3-with-jasmine/
[*] https://bigquery.cloud.google.com
