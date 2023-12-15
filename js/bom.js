// Ждем полной загрузки DOM 
document.addEventListener("DOMContentLoaded", function () {
    const text = "Some text to split";
    const words = text.split(' ');
    const length = words.length;
  
    // Вывести количество слов в теге 
    console.log(length);
  
    const table = document.querySelector('table');
  
    if (table) {
      // Получить все строки таблицы
      const rows = table.querySelectorAll('tr');
  
      // Выполнить с каждой строкой таблицы какие-либо действия
      for (const row of rows) {
        // Получить все ячейки в строке
        const cells = row.querySelectorAll('td');
  
        // Вывести содержимое каждой ячейки
        for (const cell of cells) {
          console.log(cell.textContent);
        }
      }
    } else {
      console.error('Таблица не найдена');
    }
  // Изменение структуры HTML с использованием JS 2зч4
    const p = document.createElement('p');
    p.textContent = 'Это новый абзац';
    document.body.appendChild(p);
  
    // Используйте jQuery для удобства 2зч2
    $(document).ready(function() {
      $('h1').css('color', 'blue`');
      $('input[type="submit"]').val('Отправить заявку с помощью jQuery');
      $('.form').hide();

      $('.form').fadeIn(1000);
      $('input[type="submit"]').click(function() {
        alert('Кнопка отправки заявки была нажата!');
      });
    });
  
    // Загрузка данных из XML файла
    $(document).ready(function () {
      $.ajax({
        type: "GET",
        url: "site/tours.xml",
        dataType: "xml",
        success: function (xml) {
          // Обработка данных из XML и создание списка и таблицы
          var tourList = '<ul>';
          var tourTable = '<table><thead><tr><th>Название</th><th>Цена</th><th>Длительность</th></tr></thead><tbody>';
  
          $(xml).find("tour").each(function () {
            var name = $(this).find("name").text();
            var price = $(this).find("price").text();
            var duration = $(this).find("duration").text();
  
            // Добавление в список
            tourList += '<li>' + name + ' - ' + price + '</li>';
  
            // Добавление в таблицу
            tourTable += '<tr><td>' + name + '</td><td>' + price + '</td><td>' + duration + '</td></tr>';
          });
  
          tourList += '</ul>';
          tourTable += '</tbody></table>';
  
          // Отображение данных в браузере
          $("#tourList").html(tourList + tourTable);
        },
        error: function (xhr, status, error) {
          console.log("Ошибка при загрузке XML файла: " + error);
        },
      });
    });
  
    // Пример: отобразить данные в виде списка
    $("body").append("<ul>");
    $("body").append("</ul>");
  });
  
