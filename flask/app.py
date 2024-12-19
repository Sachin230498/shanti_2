from flask import Flask,render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')


@app.route("/project")
def project():
    return "Hello project"

if __name__ == "__main__":
    app.run(debug= True, port= 8081)