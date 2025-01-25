1. Установите плагин:
    
    ```bash
    pip install pytest-xdist
    ```
    
2. Запустите тесты параллельно:
    
    ```bash
    pytest -n 4
    ```
    
3. Для Allure:
    
    ```bash
    pytest -n 4 --alluredir=allure-results
    allure serve allure-results
    ```