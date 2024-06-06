import matplotlib.pyplot as plt

#Dados para o eixo X e o eixo Y
x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

#Criar o gráfico de linha
plt.plot(x, y)

#Adicionar rótulos aos eixos
plt.xlabel('Eixo X')
plt.ylabel('Eixo Y')

#Adicionar um título
plt.title('Meu Gráfico de Linha')

#Exibir o gráfico
plt.show()