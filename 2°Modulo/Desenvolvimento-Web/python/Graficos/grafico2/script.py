import matplotlib.pyplot as plt

#Dados para o eixo X e o eixo Y
x = ['A', 'B', 'C', 'D', 'E']
y = [10, 20, 15, 25, 30]

#Criar o gráfico de barras
plt.bar(x, y)

#Adicionar rótulos aos eixos
plt.xlabel('Eixo X')
plt.ylabel('Eixo Y')

#Adicionar um título
plt.title('Meu Gráfico de Barras')

#Exibir o gráfico
plt.show()