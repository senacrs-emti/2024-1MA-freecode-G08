from flask import Flask, jsonify, request
import db  # Arquivo db.py com as funções

app = Flask(__name__)

@app.route('/save_score', methods=['POST'])
def save_score():
    data = request.json
    db.add_player_score(data['name'], data['score'])
    return 'Score saved', 201

@app.route('/get_ranking', methods=['GET'])
def get_ranking():
    players = db.get_top_players()
    return jsonify([{'nome': player[0], 'pontuacao': player[1]} for player in players])

if __name__ == '__main__':
    app.run()
