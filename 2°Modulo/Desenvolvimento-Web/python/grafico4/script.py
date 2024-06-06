import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
y = [2, 3, 5, 7, 6, 8, 9, 10, 12, 11]

plt.scatter(x, y, color='blue', marker='o')

plt.xlabel('Eixo X')
plt.ylabel('Eixo Y')

plt.title('Gráfico de Dispersão')

plt.show()