# P5-Make-Effective-Data-Visualization

Summary - The original data are from Acer (dataset 2012), by using goole bigquery I filter the important parts f.e. filtering "Openness for Problem Solving - Seek Explanations" i used the SQL query
"SELECT ST94Q09, AVG(PV1MATH) as Math, AVG(PV1READ) as Read, AVG(PV1SCIE) as Scie, AVG(W_FSTUWT) as Weight FROM [pisaDataset2012] Group by ST94Q09" to filter the data.

The bar chart shows the students performance (I used PV1Math) on the y axis and the different answer possibilities on the x axis that are important to answer the question "The importance of school factors in explaining academic performance."

Design - 
explain any design choices you made including changes to the visualization after collecting feedback

Feedback - include all feedback you received from others on your visualization from the first sketch to the final visualization

Resources:  
[*] http://pisa2012.acer.edu.au/downloads.php
[*] http://www.w3schools.com/
[*] http://busypeoples.github.io/post/testing-d3-with-jasmine/
[*] https://bigquery.cloud.google.com
