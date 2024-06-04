import mysql.connector
import os

# Conexão com o banco de dados
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="reconhecimento"
)

cursor = conn.cursor()

# Caminho para as imagens
image_folder = "./pessoas/"

# Função para converter imagem para formato binário
def convert_to_binary_data(filename):
    with open(filename, 'rb') as file:
        binary_data = file.read()
    return binary_data

# Inserir imagens no banco de dados
for i in range(69000, 69100):
    image_path = os.path.join(image_folder, f"{i}.png")
    pessoa_nome = f"Pessoa {i-68999}"
    pessoa_nascimento = f"{1990+(i-69000)%30}-01-01"  # Datas de nascimento variadas
    pessoa_imagem = convert_to_binary_data(image_path)
    
    sql_insert_query = """ INSERT INTO faces (pessoa_nome, pessoa_nascimento, pessoa_imagem)
                           VALUES (%s,%s,%s)"""

    insert_tuple = (pessoa_nome, pessoa_nascimento, pessoa_imagem)
    cursor.execute(sql_insert_query, insert_tuple)
    conn.commit()

cursor.close()
conn.close()
print("Inserção concluída")
