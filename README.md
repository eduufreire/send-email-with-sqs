Códigos criado para estudos dos serviços da AWS

### Producer Message
Código responsável por receber um JSON com alguns dados de usuário, guardar em um banco de dados e enviar para uma SQS

![Diagrama Producer](./diagrams/producer.jpg)

#

### Consumer Message
Utilizando uma lib, toda vez que uma mensagem chega na fila, ela é consumida e um email é enviado para o novo usuário registrado

![Diagrama Producer](./diagrams/consumer.jpg)
