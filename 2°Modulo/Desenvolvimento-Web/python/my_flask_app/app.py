from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="mydatabase"
)

cursor = db.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS tasks (id INT AUTO_INCREMENT PRIMARY KEY, task VARCHAR(255))")

@app.route('/')
def index():
    cursor.execute("SELECT * FROM tasks")
    tasks = cursor.fetchall()
    return render_template('intex.html', tasks=tasks)

@app.route('/add', methods=['GET', 'POST'])
def add_task():
    if request.method == 'POST':
        task = request.form['task']
        cursor.execute("INSERT INTO tasks (task) VALUES (%s)", (task,))
        db.commit()
        return redirect('/')
    return render_template('add_task.html')

@app.route('/delete/<int:tasl_id', methods=['POST'])
def delete_task(task_id):
    cursor.execute("DELETE FROM tasks WHERE id = %s", (task_id,))
    db.commit()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)