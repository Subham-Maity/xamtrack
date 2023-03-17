import json
import random
import datetime
import bson

descriptions = ["Buy groceries", "Clean the kitchen", "Walk the dog", "Do laundry","Study for exam", "Call doctor", "Pay bills", "Make dinner", "Take out trash",
"Water plants", "Go for a run", "Read book", "Write a letter to a friend", "Organize your closet", "Take a bubble bath", "Watch a movie",
"Try a new recipe", "Take a yoga class", "Go for a hike", "Volunteer at a local charity", "Take a dance class", "Write in a journal",
"Go to a museum", "Take a photography class", "Learn a new language", "Take a pottery class", "Go to a concert", "Take a painting class",
"Go to a play", "Take a cooking class", "Go to a comedy show", "Take a sewing class", "Go to a sporting event", "Take a knitting class",
"Go to a wine tasting", "Take a woodworking class", "Go to a poetry reading", "Take a jewelry making class", "Go to a book club meeting",
"Take a creative writing class", "Go to a trivia night", "Take a gardening class", "Go to a karaoke night", "Take a public speaking class",
"Go to a dance party", "Take a meditation class", "Go to a networking event", "Take a self-defense class", "Go to a speed dating event",
"Take a financial planning class", "Go to a wine and paint night", "Take a bartending class", "Go to a cooking competition",
"Take a makeup class", "Go to a fashion show", "Take a pottery painting class", "Go to a silent disco", "Take a flower arranging class",
"Go to a magic show", "Take a woodworking workshop", "Go to a food festival", "Take a soap making class", "Go to a beer tasting",
"Take a soap carving class", "Go to a cheese tasting", "Take a glass blowing class", "Go to a chocolate tasting", "Take a soap bubble class",
"Go to a cheese making class", "Take a glass etching class", "Go to a chocolate making class", "Take a soap making workshop",
"Go to a cheese pairing class", "Take a glass fusing class", "Go to a chocolate workshop", "Take a soap making seminar",
"Go to a cheese workshop", "Take a glass painting class", "Go to a chocolate and wine pairing", "Take a soap making course",
"Go to a cheese and wine pairing", "Take a glass blowing workshop", "Go to a chocolate and cheese pairing", "Take a soap making lesson",
"Go to a cheese making workshop", "Take a glass etching workshop", "Go to a chocolate making workshop", "Take a soap making tutorial",
"Go to a cheese pairing workshop", "Take a glass fusing workshop", "Go to a chocolate and wine tasting", "Take a soap making class online",
"Go to a cheese workshop online", "Take a glass painting workshop", "Go to a chocolate and cheese tasting", "Take a soap making workshop online",
"Go to a cheese and wine pairing online", "Take a glass blowing class online", "Go to a chocolate and wine pairing online",
"Take a soap making seminar online", "Go to a cheese making workshop online", "Take a glass etching class online",
"Go to a chocolate making workshop online", "Take a soap making course online", "Go to a cheese and wine pairing workshop online",
"Take a glass fusing class online", "Go to a chocolate and cheese pairing online", "Take a soap making lesson online",
"Go to a cheese pairing workshop online", "Take a glass etching workshop online", "Go to a chocolate and wine tasting online",
"Take a soap making class in person", "Go to a cheese workshop in person", "Take a glass painting workshop online",
"Go to a chocolate and cheese tasting online", "Take a soap making workshop in person", "Go to a cheese and wine pairing in person",
"Take a glass blowing class in person", "Go to a chocolate and wine pairing in person", "Take a soap making seminar in person",
"Go to a cheese making workshop in person", "Take a glass etching class in person", "Go to a chocolate making workshop in person"]

# Generate 10 random task objects
tasks = []
for i in range(100000):
    # Generate random values for each field
    description = random.choice(descriptions)
    status = random.choice(["completed", "incomplete"])
    priority = random.choice(["low", "medium", "high", "urgent"])
    due_date = datetime.datetime.utcnow() + datetime.timedelta(days=random.randint(1, 30))
    owner = str(bson.ObjectId())
    
    # Create the task object
    task = {
        "description": description,
        "status": status,
        "priority": priority,
        "dueDate": due_date.isoformat() + "Z",
        "owner": owner
    }
    
    # Add the task to the list of tasks
    tasks.append(task)

# Convert the list of tasks to JSON and print it
with open('output.txt', 'w') as f:
    f.write(json.dumps(tasks, indent=2))
