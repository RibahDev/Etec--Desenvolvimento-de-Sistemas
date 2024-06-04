import mysql.connector
import cv2
import numpy as np

def alinhar_face(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    if len(faces) == 0:
        return None
    x, y, w, h = faces[0]
    center_x, center_y = x + w // 2, y + h // 2
    size = max(w, h)
    aligned_face = gray[max(0, center_y - size // 2): center_y + size // 2, max(0, center_x - size // 2): center_x + size // 2]
    aligned_face = cv2.resize(aligned_face, (200, 200))  # Ajustar o tamanho para 200x200 pixels
    return aligned_face

def carregar_ids_imagens():
    db_config = {
        'user': 'root',
        'password': '',
        'host': 'localhost',
        'database': 'reconhecimento',
    }

    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()

    cursor.execute("SELECT pessoa_id, pessoa_imagem FROM faces")
    faces_data = cursor.fetchall()

    cursor.close()
    conn.close()

    return faces_data
