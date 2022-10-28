1: Select apellido from empleados;
2: Select distinct apellido from empleados;
3: Select * from empleados;
4: Select nombre, apellido from empleados;
5: Select cuit_cuil from empleados;
6: select concat(nombre, apellido) as nombreCompleto from empleados;
7: select upper(concat(‘ ‘, nombre ,apellido)) from empleados;
8: select lower(concat(‘ ‘, nombre , apellido) ) as nombreCompleto from empleados;
9: select nombre, presupuesto from departamentos order by presupuesto desc;
10: select nombre from departamentos order by nombre asc;
11: select nombre from departamentos order by nombre desc;
12: select apellido, nombre from empleados order by apellido, nombre asc;
13: Select nombre, presupuesto from departamentos order by presupuesto desc limit 3;
14: Select nombre, presupuesto from departamentos where presupuesto >0 order by presupuesto asc limit 3;
15: Select nombre, presupuesto from departamentos where presupuesto >=150000;
16: Select nombre, presupuesto from departamentos where presupuesto >=100000 and presupuesto <= 200000;
17: Select nombre, presupuesto from departamentos where presupuesto <=100000 and presupuesto >= 200000;
18: Select nombre, presupuesto from departamentos where presupuesto between 100000 and 200000;
19: Select nombre, presupuesto from departamentos where presupuesto not between 100000 and 200000;
20: select concat (' ', e.nombre, e.apellido) as empleado, d.nombre	 from empleados e join departamentos d  where e.id_departamento = d.iddepartamento;
21: select concat (' ', e.nombre, e.apellido) as empleado, d.nombre
from empleados e join departamentos d  where e.id_departamento = d.iddepartamento
order by nombre, empleado asc;
22: select concat (' ', d.iddepartamento, d.nombre) as departamento
from departamentos d join empleados e  where d.iddepartamento = e.id_departamento
order by departamento asc;
23: select e.cuil_cuit, d.nombre as departamento from empleados e right join departamentos d on e.id_departamento = d.iddepartamento where cuil_cuit = '27-38382980-3'
24: select d.nombre,e.nombre,e.apellido from departamentos d inner join empleados e on d.iddepartamento = e.id_departamento where e.nombre = 'Pepe'
25: select e.nombre, e.apellido from empleados e inner join departamentos d on e.id_departamento = d.iddepartamento where d.nombre = 'I+D' order by e.nombre, e.apellido asc
26: select e.nombre, e.apellido from empleados e inner join departamentos d on e.id_departamento = d.iddepartamento where d.nombre = 'I+D' or 'Sistemas' or 'Contabilidad' order by d.nombre asc 
27: select d.nombre, d.presupuesto from departamentos d where d.presupuesto <=100000 or d.presupuesto >= 200000
