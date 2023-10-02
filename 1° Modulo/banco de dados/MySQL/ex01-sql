-- CRIAR UM NOVO BANCO DE DADOS
create dataBase exemplo_0210;

-- USAR O BANCO DE DADOS CRIADO
use exemplo_0210;

-- CRIAR UMA TABELA COM ATRIBUTOS
create table Cliente (
	IDCliente int not null primary key,
    Nome varchar (60),
    Ender varchar (60),
    Cpf  varchar (20)
    );

-- ADICIONAR UM NOVO ATRIBUTO EM UMA TABELA EXISTENTE
alter table cliente add column fone varchar(20);

-- EXCLUIR UM ATRIBUTO DE UMA TABELA EXISTENTE
alter table cliente DROP column CPF;

-- INSERI VALORES AOS ATRIBUTOS A UMA TABELA EXISTENTE
INSERT INTO CLIENTE (IDCLIENTE, NOME, ENDER, FONE)
VALUES (1,'jOSÉ DA SILVA', 'RUA D. PEDRO I, 100', '(14)98767-0908');

SELECT * FROM CLIENTE;
 
 DELETE FROM CLIENTE
 WHERE IDCLIENTE =1;