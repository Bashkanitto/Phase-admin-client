
<img width="1455" alt="image" src="https://github.com/user-attachments/assets/b521a43d-f706-4e5f-b76c-cb3167763bdd" />


## 🧰 Frontend-документация проекта [arbr.kz]

**Тип проекта:** админ-панель для управления тендерами  
**Целевая аудитория:** менеджеры и поставщики  

### 1. 🚀 Установка и запуск

```bash
git clone https://github.com/Bashkanitto/Phase-admin-client.git
cd Phase-admin-client
npm install
npm run dev
```

#### Сборка
```bash
npm run build
```

---

### 2. 📂 Структура проекта

```
/src
  /app               # Корневой файл 
  /assets            # Изображения, иконки
  /components        # Переиспользуемые UI-компоненты
    /atoms           # Атомы
    /layouts         # Слои
    /organism        # Организмы
  /helpers           # Вспомогательные компоненты
  /pages             # Страницы с маршрутами
  /store             # MobX-хранилища
  /services          # Api сервисы
  /router            # Настройка роутинга 
  /configs           # Настройки (theme, env)
  /constants         # Константы (router, colors)
  main.tsx           # Точка входа
```

---

### 3. 🤖 Технологии

| Технология         | Назначение                         |
|--------------------|------------------------------------|
| React + Vite       | UI и сборка                        |
| TypeScript         | Типизация                          |
| MobX               | Состояние приложения               |
| Mantine UI         | UI-библиотека                      |
| SCSS Modules       | Стили с инкапсуляцией              |
| Axios              | Запросы к API                      |
| Framer Motion      | Анимации                           |
| React Markdown     | Рендер Markdown                    |
| Lucide-react       | Иконки                             |
| Tailwindcss        | Быстрая стилизация                 |

---

### 4. 🎨 Стили

- SCSS Modules: `Component.module.scss`
- Глобальные стили и переменные: `src/styles/`
- Mantine Theme + кастомные конфиги
- Tailwindcss: `Быстрая стилизация`

---

### 6. 📦 MobX Store

- Все хранилища в `/store`
- Основное: `makeAutoObservable`
- Оборачиваем компоненты в `observer()`

---

### 7. 🔄 API (axios)

- Базовая настройка: `src/config/axios.ts`
- Разделено по фичам: `productServices.ts`

---

### 8. 🛤️ Роутинга

- `react-router-dom v6`
- Маршруты в `src/router/routes.ts`
- Приватные маршруты (по роли, авторизации)

---

### 9. 📚 Гайды

- **Новая страница**: `/pages`, + роут в `routes.ts`
- **Обзор MobX**: `observer`, `makeAutoObservable`, context
- **Анимации**: `framer-motion` wrappers

---

### 10. 🛠️ Роли и права

**Роли:**
- **Поставщик** — создает товар
- **Менеджер** — делает заказ(только в мобильном приложении)
- **Админ** — управляет данными
