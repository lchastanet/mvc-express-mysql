drop table if exists `student`;

create table `student` (
  `id` int(11) not null auto_increment,
  `firstname` varchar(255) not null,
  `lastname` varchar(255) not null,
  `age` int(11) not null,
  `remote` tinyint(1) not null default 0,
  primary key (`id`)
);

lock tables `student` write;

insert into `student` values
(1,'tata','tata',45,0),
(2,'tutu','toto',29,1),
(3,'tutu','tutu',35,1);

unlock tables;
