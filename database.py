import sqlite3

def create_database():
    conn = sqlite3.connect("game.db")
    cursor = conn.cursor()
    
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        pontuacao INTEGER NOT NULL
    )
    ''')
    
    conn.commit()
    conn.close()

def add_player_score(nome, pontuacao):
    conn = sqlite3.connect("game.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO players (nome, pontuacao) VALUES (?, ?)", (nome, pontuacao))
    conn.commit()
    conn.close()

def get_top_players(limit=10):
    conn = sqlite3.connect("game.db")
    cursor = conn.cursor()
    cursor.execute("SELECT nome, pontuacao FROM players ORDER BY pontuacao DESC LIMIT ?", (limit,))
    top_players = cursor.fetchall()
    conn.close()
    return top_players

def clear_player_scores():
    conn = sqlite3.connect("game.db")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM players")
    conn.commit()
    conn.close()

create_database()