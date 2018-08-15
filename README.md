Небольшое ДЗ, что бы вы немного поразбирались с тем, как устроен мир в AngularJS

Дедлайн 17.08.2018 в 13-00 

Выберите между собой одного отвественного, который соберет с вас всех ссылочки на репозитории и пришлет мне.

Необходимо написать две директивы (например container и button) и пробросить метод из директивы контейнера во вложеную директиву, например так

<container>
    <my-button on-click=”paren.click(‘click1’)”></my-button>
    <my-button on-click=”paren.click(‘click2’)”></my-button>
    <my-button on-click=”paren.click(‘click3’)”></my-button>
    <my-button on-click=”paren.click(‘click4’)”></my-button>
</container>

Соответственно по клику на my-button должен отрабатывать метод, проброшеный из контейнера
$scope использовать нельзя
При описании директив использовать опцию controllerAs
