import csv
import json

# Initialize an empty dictionary to store the structured data
data = {}

# Open the CSV file and read its content
with open('e:\\dev\\js\\ptapp\\exclude\\distance-run.csv', mode='r') as file:
    reader = csv.reader(file)
    
    for row in reader:
        if len(row) < 3:  # Ensure there are at least 3 columns
            continue
        
        group, score, time = row
        
        if group not in data:
            data[group] = []
        
        # Append the score and time as key-value pairs to the group's list
        data[group].append({"Score": float(score), "Time": float(time)})

# Write the structured data to a JSON file
with open('out.json', mode='w') as json_file:
    json.dump(data, json_file, indent=4)

print("Data has been written to out.json")