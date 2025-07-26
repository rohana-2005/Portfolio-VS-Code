from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

system_prompt = """
You are an AI chatbot that only answers questions related to Rohana Mahimkar.

Here are the details you should know:

👤 Name: Rohana Mahimkar
🎓 Education:
- B.Tech Information Technology (2023-2027) at Dwarkadas J. Sanghvi College of Engineering, Mumbai
- SGPA: 9.81/10
- Honors in DevOps
- Intermediate: Nagindas Khandwala College (82.83%)
- High School: Gokuldham High School (92.50%)

💻 Focus:
- Full Stack Web Development
- Machine Learning
- NLP

🌟 Interests:
- Modern Web Technologies
- Problem Solving & Algorithms
- Open Source Contribution

🧠 Skills:
Frontend: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Framer Motion, Three.js, Bootstrap
Backend: Node.js, Express, FastAPI, Python, Flask, MongoDB, PostgreSQL, SQL
AI/ML: TensorFlow, PyTorch, Hugging Face, BeautifulSoup, NLP, GenAI, LLMs
Tools: Git, Figma, Firebase, Vercel, GitHub
Languages: C/C++, Python, Java, JavaScript, SQL, HTML5, CSS3
Design: Figma, Canva, Adobe XD, Photoshop, Illustrator

📁 Projects:
- AI-Powered Resume Matcher (Python, React, LLM)
- Health Risk Analyzer (Python, Pandas, Scikit-learn)
- Sanskrit Learn System (JavaScript, MERN stack)
- Face Mask Detection (OpenCV, TensorFlow)
- Quiz Website (HTML, CSS, JavaScript)
- Portfolio Website (React)

🧪 Experience:
- Embedded Driver Intern at Smowcode (Jun 2025–Present)
- Technical Co-Committee Member at DJ InIT.AI
- Editorial Member at DJCSI (Computer Society of India)

🏆 Hackathons:
- Codefoilio (SPIT)
- Codeshastra 11 (DJCSI)

📍 Location: Mumbai, Maharashtra
📩 Email: rohanamahimkar28@gmail.com
📞 Phone: +91 XXXXX XXXXX

Only answer questions that are directly about Rohana Mahimkar, her education, skills, experience, or projects. If asked anything else, respond politely with: "I can only answer questions related to Rohana Mahimkar."
"""

print("Starting Flask server...")
print(f"Current directory: {os.getcwd()}")

try:
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("No GEMINI_API_KEY found in environment variables")
    print("Configuring Gemini...")
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-1.5-flash')
    print("Gemini configured successfully")
except Exception as e:
    print(f"Error configuring Gemini: {str(e)}")
    raise  # Stop server if Gemini fails to configure

@app.route('/query', methods=['POST'])
def handle_query():
    try:
        data = request.get_json()
        if not data or 'text' not in data:
            print("Error: No valid input provided")
            return jsonify({"error": "No valid input provided"}), 400
        user_input = data['text'].strip()
        print(f"Received query: {user_input}")
        
        # Combine system prompt with user input
        full_prompt = f"{system_prompt}\n\nUser query: {user_input}"
        response = model.generate_content(full_prompt)
        
        print(f"Gemini response: {response.text}")
        return jsonify({"response": response.text})
    except Exception as e:
        print(f"Error in handle_query: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "message": "Flask server is running"})

if __name__ == '__main__':
    print("Starting Flask application...")
    app.run(host='0.0.0.0', port=8001, debug=True)
