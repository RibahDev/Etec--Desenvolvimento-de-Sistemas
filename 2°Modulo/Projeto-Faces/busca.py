import cv2
from banco import carregar_ids_imagens, alinhar_face
import matplotlib.pyplot as plt
import numpy as np
import time

def reconhecer_faces(nova_imagem_path):
    nova_imagem = cv2.imread(nova_imagem_path)
    aligned_face = alinhar_face(nova_imagem)
    if aligned_face is None:
        print("Nenhuma face encontrada na imagem.")
        return []

    face_id_matches = []

    faces_data = carregar_ids_imagens()
    first_image_loaded = False

    for pessoa_id, pessoa_imagem in faces_data:
        nparr = np.frombuffer(pessoa_imagem, np.uint8)
        known_face = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        known_face = alinhar_face(known_face)

        if known_face is None:
            continue

        result = cv2.matchTemplate(aligned_face, known_face, cv2.TM_CCOEFF_NORMED)
        _, max_val, _, _ = cv2.minMaxLoc(result)

        face_display = cv2.cvtColor(aligned_face, cv2.COLOR_GRAY2RGB)
        known_face_display = cv2.cvtColor(known_face, cv2.COLOR_GRAY2RGB)

        if not first_image_loaded:
            plt.ion()
            fig, ax = plt.subplots(1, 2, figsize=(10, 5))
            first_image_loaded = True

        ax[0].imshow(face_display)
        ax[0].set_title("Nova Face")
        ax[0].set_xticks([])
        ax[0].set_yticks([])
        ax[1].imshow(known_face_display)
        ax[1].set_title(f"Face ID {pessoa_id}")
        ax[1].set_xticks([])
        ax[1].set_yticks([])

        plt.pause(0.001)  # Pequena pausa para atualizar a janela

        if max_val > 0.9:
            face_id_matches.append(pessoa_id)
            print(f"Correspondência encontrada: Face ID {pessoa_id}")
            plt.ioff()
            plt.show()  # Mostrar a janela final com a correspondência
            return face_id_matches

    if first_image_loaded:
        plt.ioff()
        plt.show()  # Mostrar a janela final sem correspondência

    return face_id_matches

if __name__ == "__main__":
    start_time = time.time()
    nova_imagem_path = 'dados/foto.png'
    matches = reconhecer_faces(nova_imagem_path)
    end_time = time.time()
    print(f"Tempo para reconhecer as faces: {end_time - start_time} segundos")

    if matches:
        print(f"Faces reconhecidas com IDs: {matches}")
    else:
        print("Nenhuma face reconhecida.")
