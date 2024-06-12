import matplotlib.pyplot as plt

labels = ['Maçãs', 'Bananas', 'Cerejas', 'Damasco']
sizes = [30, 25, 20, 25]
colors = ['gold', 'yellowgreen', 'lightcoral', 'lightskyblue']
explode = (0.1, 0, 0, 0) # "Explode" a primeira fatia (Maçâs)

plt.pie(sizes, explode=explode, labels=labels, colors=colors,
        autopct='%1.1f%%', shadow=True, startangle=140)

plt.title('Distribuição de Frutas')

plt.axis('equal') # Equal aspect ratio garante que o gráfico seja um círculo
plt.show()