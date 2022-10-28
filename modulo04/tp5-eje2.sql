1: Select p.cantidad ,p.fecha as pedidos from pedidos p order by p.fecha asc
2: select cantidad as pedidos from pedidos order by cantidad desc limit 2
3: select distinct id_cliente from pedidos
4: select fecha from pedidos where fecha like '2022%' and cantidad > '500'
5: select nombre, apellido from vendedores where comisión between '0.05' and '0.11'
6: select comisión from vendedores order by comisión desc limit 1
7: select id, nombre, apellido from clientes where cuitcuil is not null order by apellido, nombre desc
8: select nombre from clientes where nombre like 'P%' or nombre like 'A%n'
9: select nombre from clientes where nombre not like 'a%' order by nombre asc
10: select distinct nombre from vendedores where nombre like '%el' or nombre like '%o'
11: select distinct c.id, c.nombre, c.apellido from clientes c join pedidos p on c.id = p.id_cliente order by nombre, apellido asc
12: select a.*,(concat_ws(' ',b.nombre, b.apellido)) as Cliente from pedidos a inner join clientes b where a.id = b.id order by b.nombre asc
13: select a.*, concat_ws(' ',b.nombre,b.apellido) as Vendedor from pedidos a inner join vendedores b where a.id_vendedor = b.id order by b.nombre asc

14: select concat_ws(' ',a.nombre,a.apellido) as cliente, 
concat_ws(' ',b.nombre,b.apellido) as Vendedor,
c.cantidad,c.fecha
from clientes a inner join vendedores b inner join pedidos c 
where b.id = c.id_vendedor;

15: select distinct concat_ws(' ',a.nombre,a.apellido) as Cliente,
b.fecha,b.cantidad
from clientes a
inner join pedidos b where fecha like '2022%' and cantidad between '300' and '1000';

16:  Select distinct v.nombre, v.apellido, c.nombre,c.apellido, p.id_cliente from vendedores v join pedidos p  join clientes c on v.id = (p.id_cliente = c.id ) where p.id_cliente = 6

17: Select distinct v.nombre, v.apellido, c.nombre,c.apellido, p.id_cliente from vendedores v join pedidos p  join clientes c on v.id = (p.id_cliente = c.id)

18: select distinct concat_ws(' ',c.nombre,c.apellido) as clientes, p.id_cliente, p.cantidad, p.fecha from clientes c  left join pedidos p on c.id = p.id_cliente order by clientes asc

19: select distinct concat_ws(' ',v.nombre,v.apellido) as vendedor, p.id_vendedor, p.cantidad, p.fecha
from vendedores v
left join pedidos p 
on v.id = p.id_vendedor
order by vendedor asc;

20: select concat_ws(' ',clientes.nombre, clientes.apellido) as Cliente, clientes.id as Cliente_id from pedidos 
right join clientes  on pedidos.id_cliente = clientes.id
where pedidos.id_cliente is null

21: select distinct concat_ws(' ',v.nombre,v.apellido) as vendedor from vendedores v
join pedidos p where v.id like '8'

22: select concat_ws(' ',v.nombre,v.apellido) as Vendedor, v.id as vendedor_id from pedidos p
right join vendedores v on p.id_vendedor = v.id
where p.id_vendedor is null
union 
select concat_ws(' ',clientes.nombre, clientes.apellido) as Cliente, clientes.id as Cliente_id from pedidos 
right join clientes  on pedidos.id_cliente = clientes.id
where pedidos.id_cliente is null
order by vendedor asc

23: select sum(cantidad) as Total_Cantidad from pedidos

24: select avg(cantidad) as Promedio_Cantidad from pedidos

25: select COUNT(id) as cantidad_vendedores from vendedores v

26: Select count(id) as total_clientes from clients

27: Select max(cantidad) as mayor_cantidad from pedidos

28: Select min(cantidad) as menor_cantidad from pedidos

29: Select max(categoría) as mayor_categoria from clients

30: SELECT max(pedidos.cantidad) as Max_Pedido, fecha, id_cliente, clientes.nombre, clientes.apellido  from ventas.pedidos 
inner join ventas.clientes ON ventas.clientes.id=ventas.pedidos.id_cliente
group by ventas.pedidos.id_cliente, ventas.pedidos.fecha

31: select c.id,c.nombre,c.apellido,p.fecha,p.cantidad from clientes c
join pedidos p on c.id = p.id_cliente
where cantidad > 2000
group by fecha order by fecha

32: select c.id,c.nombre,c.apellido,p.fecha,p.cantidad from clientes c
join pedidos p on c.id = p.id_cliente
where fecha like '2021-08-17'

33: select distinct c.id,c.nombre,c.apellido,p.fecha,p.cantidad from clientes c
left join pedidos p on c.id = p.id_cliente
group by nombre

34: select c.id,c.nombre,c.apellido,p.fecha from clientes c
join pedidos p on c.id = p.id_cliente
where fecha between '2020-01-01' and '2020-12-31'
35: SELECT id, MAX(cantidad), YEAR(fecha) FROM pedidos
GROUP BY YEAR(fecha)
ORDER BY YEAR(fecha) asc;

36: SELECT count(cantidad) As cantidad , YEAR(fecha) as fecha FROM pedidos
GROUP BY YEAR(fecha)
ORDER BY YEAR(fecha) asc;

37: SELECT p.cantidad as cantidad_pedidos, concat_ws(' ',c.nombre, c.apellido) as nombre_cliente 
from pedidos p left join clientes c on p.id_cliente = c.id where c.id = '2'

38: SELECT p.cantidad as cantidad_pedidos, concat_ws(' ',v.nombre, v.apellido) as nombre_vendedor
from pedidos p left join vendedores v on p.id_vendedor = v.id where v.id = '1'

39: SELECT distinct concat_ws(' ',c.nombre,c.apellido) as Cliente,max(cantidad) as cantidad from clientes c
left join pedidos p on c.id = p.id_cliente where fecha like '2020%'

40: SELECT distinct concat_ws(' ',c.nombre,c.apellido) as Cliente,min(cantidad) as cantidad from clientes c
left join pedidos p on c.id = p.id_cliente where c.id = '8'

41: select concat_ws(' ',c.nombre,c.apellido) as Cliente, c.id from clientes c
where c.id not in (select p.id_cliente from pedidos p)

42: select concat_ws(' ',v.nombre,v.apellido) as Vendedor, v.id from vendedores v
where v.id not in (select p.id_vendedor from pedidos p)

43: select concat_ws(' ',c.nombre,c.apellido) as Cliente, c.id from clientes c
where not exists (select * from pedidos p where c.id = p.id_cliente)	

44: select concat_ws(' ',v.nombre,v.apellido) as Vendedor, v.id from vendedores v
where not exists (select * from pedidos p where v.id = p.id_vendedor)
