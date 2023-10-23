create database Escola;
use Escola;
create table Alunos (
	ID int not null primary key,
    nome varchar(50),
    idade int,
    nota double
);
-- Criar tabelas (pasta Aluno) 
alter table Alunos add column Endereco varchar(50);

-- Modificar 
alter table Alunos change nota NotaFinal numeric(5, 2);

insert into Alunos  values (1, 'Jefferson Souza', 25, 8.5, 'Aumir Andrade e Silva, 400');
insert into Alunos values (2, 'Roberto Andrade', 34, 7, 'Pedro Ometto, 245');
insert into Alunos values (3, 'Suzana nas Alturas', 45, 9, 'Fernando Pessoa, 976');
-- Adicionando apenas alguns dados
insert into Alunos (ID, nome) values ('4', 'Anderson Santana');
update Alunos
set idade = 22
where ID = 1;
alter table Alunos drop column Endereco;

select * from Alunos;
