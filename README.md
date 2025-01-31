# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Описание базовых классов, их предназначение и функции.

Класс **Item** хранит в себе информацию товаре и содержит метод *addToCart*, который позваляет добавить товар в корзину. Свойства класса: 
- name (название товара) -- string;
- description (описание товара) -- string;
- section (раздел товара) -- string;
- price (цена товара) -- number;
- pictureUrl (ссылка на изображение) -- string;

Карточки товара имеют три формы:
- сокращенная, используется при изобращении товара в корзине (name, price);
- средняя, используется при отображении списка товаров в каталоге (name, section, price, pictureUrl)
- полная, используется в открытой карточке, которая развернулась при клике по карточке товара в каталоге (name, description, section, price, pictureUrl)

метод *addToCart* доступен только в полной форме карточки товара.


Класс **Cart** хранит данные корзины, а именно список товаров, добавленных ранее в корзину и общую стоимость. Реализует методы *removeFromCart* - удалить из корзины элемент из списка товаров itemList и *checkout* - перейти к оформлению заказа. Свойства класса: 
- itemList (список товаров: товар, его количество) -- {Item: number}[];
- totalPrice (общая стоимость) -- number;

Класс **PersonalData** хранит личные данные плательщика. Реализует метод *pay* - который позволяет оплатить заказ. Свойства класса:
- paymentMethod (способ оплаты) -- online || offline;
- addres (адресс доставки) -- string;
- email (почта заказчика) -- string;
- phoneNumber (номер телефона заказчика) -- string;

Опишем пользовательский сценарий:
точка старта - каталог с товаром
- кликаем по карточке товара - получаем развернутую карточку
- добавляем товар в корзину через кнопку "купить"
- переходим в точку старта - каталог
эти действия можно повторить несколько раз а результате чего в корзине будут видны все добавленные товары
- по клику на корзину переходим  к списку добавленных товаров (есть возможность менять количество, удалять товары)
- клик по кнопке оформить - пользователь переходит к заполнению персональных данных
- форма со способом оплаты и адресом доставки
- форма с почтой и номером телефона.
- при клике оплатить происходит процесс покупки
- на экране появляется окно - заказ оформлен и списанные синапсы (при успехе)
- клип по кнопке "За новыми покупками" - попадаем в точку старта
