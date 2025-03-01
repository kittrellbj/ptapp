# PT Calculator

The PT Calculator (PTApp) was created for trainers for or in association with the Mississippi Law Enforcement Officers Training Academy (MLEOTA) to quickly and easily calculate candidate scores from performance times in three events: the 1.5 mile run, the agility run, and pushup repetitions. Candidates of various ages may be tested for physical fitness and capabilities before entrance to MLEOTA to complete police academy training. The data for each gender and age group made it cumbersome for trainers to determine whether a candidate received passing scores in the events, so the calculator was designed to ease these issues.

### Features

Trainers may enter the time taken by a candidate to complete each event by entering the age and gender of the candidate, along with the times in the respective input fields. When the trainer hits calculate, the scores are determined and provided in percentile to the trainer. For at-a-glance judgements, the calculator also provides quick results:

- The green checkmark indicates that a candidate meets entrance qualification time (50% score) and also meets academy graduation time (70% score). The candidate should have no trouble in this event area.
- The yellow checkmark indicates that a candidate meets entrance qualification time (50% score), but the candidate does not yet meet academy graduation time (70% score). This is an area where the candidate should invest additional time and effort.
- The red X indicates that a candidate does not meet entrance qualification time (50% score) and does not meet academy graduation time (70% score). The candidate will need to devote time and effort to improve scores and apply at a later time.

### System Design

The calculator was designed to be a web page application and a Progressive Web Application (PWA) such that instructors and trainers can have access anytime, anywhere, with or without Internet connectivity. It was written in HTML, CSS, and JavaScript, and the data sources from MLEOTA's qualification times were converted to JSON data structures for easier lookup in code.

Python scripts were written to extract the qualification data from Excel spreadsheets that had been condensed into CSV key-value pairs by group. The preparation scripts and CSV files are provided in /exclude/ to demonstrate how the JSON data sources were constructed.

### Dedication 

This app is dedicated to the memory of [Deputy Sergeant Martin Shields, Jr.](https://www.odmp.org/officer/27337-deputy-sergeant-martin-shields-jr) of the Hinds County Sheriff's Department. He was killed on February 23rd, 2025, when he responded to a domestic violence call. He was 37 years old.  He was and will always be my friend.
