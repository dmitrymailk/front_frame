# Рендеринг объектов

**Пока логика такая**

1. если обновился родитель, значит нужно перерендерить и его детей
2. можно хранить только состояние компонента, при запросе на ререндеринг
   сравнивать то что изменилось и переназначать нужные свойства элемента

## Теория

- https://developer.mozilla.org/en-US/docs/Web/API/NodeList