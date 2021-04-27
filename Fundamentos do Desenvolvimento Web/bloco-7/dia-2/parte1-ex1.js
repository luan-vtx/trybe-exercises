const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
let deliveryPersonName = order.order.delivery.deliveryPerson;
let orderPersonName = order.name;
let orderPersonPhone = order.phoneNumber;
let orderPersonStreet = order.address.street;
let orderPersonNumber = order.address.number;
let orderPersonAp = order.address.apartment;

const message = `Olá, ${deliveryPersonName}, entrega para: ${orderPersonName}, Telefone: ${orderPersonPhone}, ${orderPersonStreet}, No: ${orderPersonNumber}, AP: ${orderPersonAp}`;

  console.log(message);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newDeliveryPersonName = 'Luiz Silva';
  order.order.delivery.deliveryPersonName = newDeliveryPersonName;
  const name = order.order.delivery.deliveryPersonName;
  const newTotalValue = 50;
  order.payment = newTotalValue;
  const payment = order.payment;
  const drink = order.order.drinks.coke.type;

  console.log(`Olá, ${name}, o total do seu pedido de muzzarella, calabresa e ${drink} é R$${payment}.`)
}

orderModifier(order);

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."  Modifique o nome da pessoa compradora. Modifique o valor total da compra para R$ 50,00.