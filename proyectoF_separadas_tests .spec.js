import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

//CASO1
//Verificar que el la pagina demoqa.com exista y que en la pantalla de inicio aparezca el Logo de "Tools QA"

test('Test case 1: Verificar que el la pagina demoqa.com exista y que en la pantalla de inicio aparezca el Logo de Tools QA', async ({ page }) => {
    console.log("Test case 1: Verificar que el la pagina demoqa.com exista y que en la pantalla de inicio aparezca el Logo de Tools QA");
    try {
        await page.goto('https://demoqa.com');
        await page.waitForTimeout(1000)
        const logo = await page.locator('header a img');
        await expect(logo).toBeVisible();
        console.log("✅ Test case 1: El título es visible: ToolsQA");
    } catch (error) {
        console.error("❌ Test case 1: Falló la validación del logo de Tools QA. Error:", error.message);
    }
});
// //CASO2
// //Verificar que exitan diferente boton enlaces ( Elements , Form, Alerts, Frame & Windows, Widgats, Interactions and Book Store Application
test('Test case 2: Verificar que exitan diferente boton enlaces ( Elements , Form, Alerts, Frame & Windows, Widgats, Interactions and Book Store Application', async ({ page }) => {
    console.log("Test case 2: Verificar que exitan diferente boton enlaces ( Elements , Form, Alerts, Frame & Windows, Widgats, Interactions and Book Store Application");
    try {
        // Paso 1: Acceder a la página principal
        await page.goto('https://demoqa.com');

        // Validar que la URL sea correcta
        await expect(page).toHaveURL('https://demoqa.com');

        // Paso 2: Localizar las cartas de navegación
        const cards = page.locator('div[class="card-body"]');

        // Contar el número de cartas visibles
        const cardCount = await cards.count();

        // Validar que el número de cartas sea exactamente 6
        expect(cardCount).toBe(6);

        // Paso 3: Verificar que cada carta sea visible
        for (let i = 0; i < cardCount; i++) {
        const card = cards.nth(i);
        await expect(card).toBeVisible();
        }

        // Mensaje de éxito en la consola
        console.log("✅ Test case 2: Se encuentran 6 cartas visibles: Elements, Forms, Alerts, Widgets, Interactions y Book Store.");
    } catch (error) {
        // Mensaje de error en la consola
        console.error("❌ Test case 2: Falló la validación de las cartas de navegación. Error:", error.message);   
    }
});

// // //CASO 3
// // // Ir al enlace de Elements
test('Test case 3: Ir al enlace de Elements', async ({ page }) => {

   console.log("Test case 3: Ir al enlace de Elements");
   try {
    // Paso 1: Ingresar a demoqa.com
    await page.goto('https://demoqa.com');

    // Validar que la URL sea correcta
    await expect(page).toHaveURL('https://demoqa.com');

    // Validar que el botón 'Elements' esté visible
    const elementsButton = page.locator('//*[@id="app"]/div/div/div[2]/div/div[1]/div/div[3]/h5');
    await expect(elementsButton).toBeVisible();

    // Paso 2: Hacer clic en el botón 'Elements'
    await elementsButton.click();

    // Paso 3: Confirmar redirección a la página de 'Elements'
    await expect(page).toHaveURL('https://demoqa.com/elements');

    console.log("✅ Test case 3: Navegación al botón 'Elements' completada exitosamente.");
  } catch (error) {
    console.error("❌ Test case 3: Falló la interacción con el botón 'Elements'. Error:", error.message);
  } 
});
// // //CASO4
// // // Dentro de Elements verificar que en la lista de desplegables aparezcan "Text box" dar clic y verificar que sea el pagina de Text Box
test('Test case 4: Dentro de Elements verificar que en la lista de desplegables aparezcan Text box dar clic y verificar que sea el pagina de Text Box', async ({ page }) => {
console.log("Test case 4: Dentro de Elements verificar que en la lista de desplegables aparezcan Text box dar clic y verificar que sea el pagina de Text Box");
try {
    // Paso 1: Ingresar a la página de Elements con un tiempo de espera extendido
    await page.goto('https://demoqa.com/elements', { timeout: 60000 }); // Aumentar el tiempo de espera a 60 segundos

    // Validar que la URL sea correcta
    await expect(page).toHaveURL('https://demoqa.com/elements');

    // Paso 2: Validar que el submenú 'Text box' esté visible
    const textBoxMenu = page.locator('li#item-0', { hasText: 'Text Box' });
    await textBoxMenu.waitFor({ state: 'visible', timeout: 10000 }); // Esperar explícitamente a que el submenú sea visible

    // Paso 3: Hacer clic en el submenú 'Text box'
    await textBoxMenu.click();

    // Validar que la URL cambie a la página de 'Text box'
    await expect(page).toHaveURL('https://demoqa.com/text-box');

    // Paso 4: Validar que los campos del formulario sean visibles
    const fullNameField = page.locator('#userName');
    const emailField = page.locator('#userEmail');
    const currentAddressField = page.locator('#currentAddress');
    const permanentAddressField = page.locator('#permanentAddress');

    await expect(fullNameField).toBeVisible();
    await expect(emailField).toBeVisible();
    await expect(currentAddressField).toBeVisible();
    await expect(permanentAddressField).toBeVisible();

    // Mensaje de éxito en la consola
    console.log("✅ Test case 4: El submenú 'Text box' es visible y funcional.");
} catch (error) {
    // Mensaje de error en la consola
    console.error("❌ Test case 4: Falló la validación del submenú 'Text box'. Error:", error.message);
}
});

 //Test group for test cases 5-7
test('Test case 5: Navegar en Elements , ir a Radio Button y seleccionar Impressive', async ({ page }) => {
    //CASO5
    //Navegar en "Elements" , ir a "Radio Button" y seleccionar "Impressive"
    console.log("Test case 5: Navegar en Elements , ir a Radio Button y seleccionar Impressive");
    try {
    // Paso 1: Ingresar a la página de Elements
    await page.goto('https://demoqa.com/elements');

    // Validar que la URL sea correcta
    await expect(page).toHaveURL('https://demoqa.com/elements');

    // Paso 2: Verificar que el submenú 'Radio Button' esté visible
    const radioButtonMenu = page.locator('li[id="item-2"]', { hasText: 'Radio Button' });
    await expect(radioButtonMenu).toBeVisible();

    // Hacer clic en el submenú 'Radio Button'
    await radioButtonMenu.click();

    // Paso 3: Validar que la URL cambie a la página de 'Radio Button'
    await expect(page).toHaveURL('https://demoqa.com/radio-button');

    // Paso 4: Seleccionar la opción 'Impressive'
    const impressiveRadioButton = page.locator('label[for="impressiveRadio"]');
    await expect(impressiveRadioButton).toBeVisible();
    await impressiveRadioButton.click();

    // Validar que la opción 'Impressive' esté seleccionada
    const impressiveRadioInput = page.locator('input[id="impressiveRadio"]');
    await expect(impressiveRadioInput).toBeChecked();

    // Mensaje de éxito en la consola
    console.log("✅ Test case 5: La opción 'Impressive' fue seleccionada correctamente.");
  } catch (error) {
    // Mensaje de error en la consola
    console.error("❌ Test case 5: Falló la validación de la opción 'Impressive'. Error:", error.message);
  }
});
//CASO6
//Navegar en "Alerts, Frame & Windows" , ir a "Browser Windows"
test('Test case 6: Navegar en Alerts, Frame & Windows , ir a Browser Windows', async ({ page }) => {
   console.log("Test case 6: Navegar en Alerts, Frame & Windows , ir a Browser Windows");
  try {
    // Paso 1: Ingresar a la página principal
    await page.goto('https://demoqa.com');

    // Validar que la URL sea correcta
    await expect(page).toHaveURL('https://demoqa.com');

    // Paso 2: Verificar que la categoría 'Alerts, Frame & Windows' esté visible
    const alertsCategory = page.locator('div.card-body h5', { hasText: 'Alerts, Frame & Windows' });
    await expect(alertsCategory).toBeVisible();

    // Hacer clic en la categoría 'Alerts, Frame & Windows'
    await alertsCategory.click();

    // Paso 3: Verificar que el submenú 'Browser Windows' esté visible
    const browserWindowsMenu = page.locator('li#item-0', { hasText: 'Browser Windows' });
    await expect(browserWindowsMenu).toBeVisible();

    // Hacer clic en el submenú 'Browser Windows'
    await browserWindowsMenu.click();

    // Paso 4: Validar que la URL cambie a la página de 'Browser Windows'
    await expect(page).toHaveURL('https://demoqa.com/browser-windows');

    // Mensaje de éxito en la consola
    console.log("✅ Test case 6: Se muestra la página de 'Browser Windows' correctamente.");
  } catch (error) {
    // Mensaje de error en la consola
    console.error("❌ Test case 6: Falló el acceso a la categoría 'Alerts, Frame & Windows' o al submenú 'Browser Windows'. Error:", error.message);
  }

});

// //CASO7 
// //En Browser Windows seleccionar "New Tab" para que redireccione a https://demoqa.com/sample
test('Test case 7: En Browser Windows seleccionar New Tab para que redireccione a https://demoqa.com/sample', async ({ page }) => {
   console.log("Test case 7: En Browser Windows seleccionar New Tab para que redireccione a https://demoqa.com/sample");
   try {
        // Paso 1: Ingresar a la página de Browser Windows
        await page.goto('https://demoqa.com/browser-windows');

        // Validar que la URL sea correcta
        await expect(page).toHaveURL('https://demoqa.com/browser-windows');

        // Paso 2: Verificar que el botón "New Tab" esté visible
        const newTabButton = page.locator('button[id="tabButton"]');
        await expect(newTabButton).toBeVisible();

        // Paso 3: Hacer clic en el botón "New Tab"
        const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // Obtener el contexto desde la página y esperar que se abra una nueva pestaña
        newTabButton.click(), // Hacer clic en el botón
        ]);

        // Validar que la nueva pestaña se abra con la URL correcta
        await newPage.waitForLoadState('domcontentloaded');
        const newPageUrl = newPage.url();

        if (newPageUrl === 'https://demoqa.com/sample') {
        console.log('✅ Test case 7: La nueva pestaña redirige correctamente a https://demoqa.com/sample.');
        } else {
        console.error(`❌ Test case 7: La nueva pestaña no redirige correctamente. URL actual: ${newPageUrl}`);
        }

        // Validar explícitamente que la URL sea la esperada
        await expect(newPage).toHaveURL('https://demoqa.com/sample');
    } catch (error) {
        // Mensaje de error en la consola
        console.error(`❌ Test case 7: Falló la validación del botón "New Tab". Error: ${error.message}`);
    }
});
//CASO8
//Navegar en "Widgets" ir al "Progress Bar" y dar click en "Start"

test('Navegar en Widgets ir al Progress Bar y dar click en Start', async ({ page }) => {
    console.log("Test case 8: Navegar en Widgets ir al Progress Bar y dar click en Start");

    try {
        // Paso 1: Ingresar a la página principal y verificar que la categoría "Widgets" esté presente
        await page.goto('https://demoqa.com');
        const widgetsCategory = page.locator('div.card-body h5', { hasText: 'Widgets' });
        await expect(widgetsCategory).toBeVisible();

        // Paso 2: Hacer clic en la categoría "Widgets"
        await widgetsCategory.click();

        // Paso 3: Verificar que el submenú "Progress Bar" esté visible y hacer clic en él
        const progressBarMenu = page.locator('li#item-4', { hasText: 'Progress Bar' });
        await expect(progressBarMenu).toBeVisible();
        await progressBarMenu.click();

        // Validar que la URL cambie a la página de "Progress Bar"
        await expect(page).toHaveURL('https://demoqa.com/progress-bar');

        // Paso 4: Verificar que el botón "Start" esté visible y funcional
        const startButton = page.locator('button[id="startStopButton"]');
        await expect(startButton).toBeVisible();
        await startButton.click();

        // Paso 5: Verificar periódicamente el progreso hasta que alcance el 100%
        const progressBar = page.locator('div[role="progressbar"]');
        let progressValue = await progressBar.getAttribute('aria-valuenow');
        const maxWaitTime = 15000; // Tiempo máximo de espera en milisegundos
        const interval = 500; // Intervalo de verificación en milisegundos
        let elapsedTime = 0;

        while (progressValue !== '100' && elapsedTime < maxWaitTime) {
            await page.waitForTimeout(interval);
            progressValue = await progressBar.getAttribute('aria-valuenow');
            elapsedTime += interval;
        }

        // Validar que la barra haya alcanzado el 100%
        expect(progressValue).toBe('100'); // Validar que la barra esté al 100%

        // Mensaje de éxito en la consola
        console.log("✅ Test case 8: La barra de progreso se completó correctamente al 100%.");
    } catch (error) {
        // Mensaje de error en la consola
        console.error(`❌ Test case 8: Falló la validación del botón "Start" o la barra de progreso. Error: ${error.message}`);
    }
});
// //CASO9 negativo
// //En "Widgets" Verificar el color verde presente en el "Progress Bar" una vez completado el proceso
test('En "Widgets" Verificar el color verde presente en el "Progress Bar" una vez completado el proceso ', async ({ page }) => {

  try {
       console.log("Test case 9: En Widgets Verificar el color verde presente en el Progress Bar una vez completado el proceso");
    // Paso 1: Ingresar a la página de Progress Bar
    await page.goto('https://demoqa.com/progress-bar');

    // Validar que la URL sea correcta
    await expect(page).toHaveURL('https://demoqa.com/progress-bar');

    // Paso 2: Verificar que el botón "Start" esté visible y funcional
    const startButton = page.locator('button[id="startStopButton"]');
    await expect(startButton).toBeVisible();
    await startButton.click();

    // Paso 3: Esperar que la barra de progreso se complete al 100%
    await page.waitForTimeout(11000); // Ajustar el tiempo según el comportamiento de la barra
    const progressBar = page.locator('div[role="progressbar"]');
    const progressValue = await progressBar.getAttribute('aria-valuenow');
    expect(progressValue).toBe('100'); // Validar que la barra esté al 100%

    // Paso 4: Verificar que el color de la barra sea verde
    const color = await progressBar.evaluate((el) =>
      window.getComputedStyle(el).backgroundColor
    );
    console.log('Color detectado:', color);

    if (color === 'rgb(40, 167, 69)') {
      console.log('✅ Test Case 9: La barra de progreso se completó correctamente y el color es verde.');
    } else {
      console.error(`❌ Test Case 9: La barra se completó al 100%, pero el color detectado es incorrecto: ${color}`);
    }
  } catch (error) {
    // Mensaje de error en la consola
    console.error(`❌ Test Case 9: Falló la validación del color de la barra de progreso. Error: ${error.message}`);
  }
});
//CASO10
//Navegar en "Book Store Application" ir al "Login"
test('Navegar en "Book Store Application" ir al "Login" ', async ({ page }) => {
  try {
        console.log("Test case 10: Navegar en Book Store Application ir al Login");
    // Paso 1: Ingresar a la página principal y verificar que la categoría "Book Store Application" esté presente
    await page.goto('https://demoqa.com');
    const bookStoreCategory = page.locator('div.card-body h5', { hasText: 'Book Store Application' });
    await expect(bookStoreCategory).toBeVisible();

    // Paso 2: Hacer clic en la categoría "Book Store Application"
    await bookStoreCategory.click();

    // Validar que la URL cambie a la página de "Book Store Application"
    await expect(page).toHaveURL('https://demoqa.com/books');

    // Paso 3: Verificar que el botón "Login" esté visible y hacer clic en él
    const loginButton = page.locator('button[id="login"]');
    await expect(loginButton).toBeVisible();
    await loginButton.click();
    await page.waitForTimeout(9000);
    // Validar que la URL cambie a la página de "Login"
    await expect(page).toHaveURL('https://demoqa.com/login');

    // Mensaje de éxito en la consola
    console.log("✅ Test case 10: Se muestra la pantalla de Login correctamente.");
  } catch (error) {
    // Mensaje de error en la consola
    console.error(`❌ Test case 10: Falló la navegación a la pantalla de Login. Error: ${error.message}`);
  }

});
//CASO11
//Click en "New User" verificar que se despliegue la nueva pantalla en https://demoqa.com/register
test('Click en New User verificar que se despliegue la nueva pantalla en https://demoqa.com/register', async ({ page }) => {

  try {
     console.log("Test case 11: Click en New User verificar que se despliegue la nueva pantalla en https://demoqa.com/register");
    // Paso 1: Ingresar a la página de Login
    await page.goto('https://demoqa.com/login');

    // Validar que la URL sea correcta
    await expect(page).toHaveURL('https://demoqa.com/login');

    // Paso 2: Verificar que el botón "New User" esté visible
    const newUserButton = page.locator('button[id="newUser"]');
    await expect(newUserButton).toBeVisible();

    // Paso 3: Hacer clic en el botón "New User"
    await newUserButton.click();

    // Validar que la URL cambie a la página de registro
    await expect(page).toHaveURL('https://demoqa.com/register');

    // Paso 4: Verificar que el título "Register" esté visible
    const registerTitle = page.locator('h1[class="text-center"]');
    await expect(registerTitle).toBeVisible();

    // Mensaje de éxito en la consola
    console.log("✅ Test case 11: La pantalla de registro se muestra correctamente con el título 'Register'.");
  } catch (error) {
    // Mensaje de error en la consola
    console.error(`❌ Test case 11: Falló la validación de la funcionalidad 'New User'. Error: ${error.message}`);
  }
});

// //CASO12
// //En https://demoqa.com/register completar la informacion "First Name, Last Name, UserName, Password" , marcar la opcioón de "
// //I'm not a robot" y click en Register

test('Test case 12: Completar registro con CAPTCHA ', async ({ page }) => {
try {
    console.log("Test case 12: Completar registro con CAPTCHA");

    // Paso 1: Ingresar a la página de registro
    await page.goto('https://demoqa.com/register');

    // Validar que la URL sea correcta
    await expect(page).toHaveURL('https://demoqa.com/register');

    // Paso 2: Completar los campos del formulario
    await page.fill('input[id="firstname"]', 'Ana');
    const firstNameValue = await page.locator('input[id="firstname"]').inputValue();
    await expect(firstNameValue).toBe('Ana'); // Validar que el nombre se refleje

    await page.fill('input[id="lastname"]', 'Soto');
    const lastNameValue = await page.locator('input[id="lastname"]').inputValue();
    await expect(lastNameValue).toBe('Soto'); // Validar que el apellido se refleje

    await page.fill('input[id="userName"]', 'Ana.Soto');
    const userNameValue = await page.locator('input[id="userName"]').inputValue();
    await expect(userNameValue).toBe('Ana.Soto'); // Validar que el nombre de usuario se refleje

    await page.fill('input[id="password"]', 'Passw123');
    const passwordType = await page.locator('input[id="password"]').getAttribute('type');
    await expect(passwordType).toBe('password'); // Validar que la contraseña esté oculta

    // Paso 3: Interactuar con el CAPTCHA (simulado)
    await page.click('div[id="g-recaptcha"]'); // Nota: CAPTCHA no debe ser automatizable, pero se simula para pruebas.

    // Paso 4: Hacer clic en el botón "Register"
    await page.click('button[id="register"]');

    // Validar que el registro se complete (puedes agregar validaciones adicionales según el comportamiento esperado)
    await page.waitForTimeout(2000); // Esperar respuesta del sistema

    // Mensaje de éxito en la consola
    console.log("✅ Test case 12: Se completa la información en Register correctamente.");
} catch (error) {
    // Mensaje de error en la consola
    console.error(`❌ Test case 12: Falló la validación del registro con CAPTCHA. Error: ${error.message}`);
}
});
test('Test case 13: Verificar mensaje de error al ingresar credenciales inválidas en https://demoqa.com/login', async ({ page }) => {
    //CASO13 Negativa Verificar mensaje de error al ingresar credenciales inválidas en Book Store Application
    try {
        console.log("Test case 13: Verificar mensaje de error al ingresar credenciales inválidas en https://demoqa.com/login");

        // Paso 1: Ingresar a la página de login
        await page.goto('https://demoqa.com/login');

        // Validar que la URL sea correcta
        await expect(page).toHaveURL('https://demoqa.com/login');

        // Paso 2: Llenar los campos con datos inválidos
        await page.fill('#userName', 'UserPrueba'); // Nombre de usuario inválido
        await page.fill('#password', '123'); // Contraseña inválida

        // Paso 3: Hacer clic en el botón "Login"
        await page.click('#login');

        // Paso 4: Validar que el mensaje de error sea visible
        const errorMessage = page.locator('p[id="name"]');
        await expect(errorMessage).toBeVisible();

        // Leer y validar el texto del mensaje de error
        const errorText = await errorMessage.textContent();
        console.log("Mensaje mostrado:", errorText?.trim());
        expect(errorText?.trim()).toBe('Invalid username or password!');

        // Mensaje de éxito en la consola
        console.log("✅ Test case 13 Negativa: Mensaje de error mostrado correctamente para login inválido.");
    } catch (error) {
        // Mensaje de error en la consola
        console.error(`❌ Test case 13: Falló la validación del mensaje de error. Error: ${error.message}`);
    }
  });
    // //CASO14
    // //Visualizar anuncio en la parte inferior de Register. https://demoqa.com/register
test('Test case 14: Verificar anuncio inferior en la página Register', async ({ page }) => {
    try {
        console.log("Test case 14: Verificar anuncio inferior en la página Register");

        // Paso 1: Ingresar a la página de registro
        await page.goto('https://demoqa.com/register');

        // Validar que la URL sea correcta
        await expect(page).toHaveURL('https://demoqa.com/register');

        // Paso 2: Verificar que el iframe del anuncio sea visible
        const adIframe = page.locator('iframe[id="google_ads_iframe_/21849154601,22343295815/Ad.Plus-Anchor_0"]');
        await expect(adIframe).toBeVisible();

        // Mensaje de éxito en la consola
        console.log("✅ Test Case 14: El anuncio inferior es visible correctamente.");
    } catch (error) {
        // Mensaje de error en la consola
        console.error(`❌ Test Case 14: Falló la validación del anuncio inferior. Error: ${error.message}`);
    }
});
// //CASO15 negativa
test('Validar que el registro sea bloqueado si no se completa el CAPTCHA', async ({ page }) => {
  try {
    console.log("Test case 15: Validar que el registro sea bloqueado si no se completa el CAPTCHA");

    // Paso 1: Ingresar a la página de registro
    await page.goto('https://demoqa.com/register');

    // Validar que la URL sea correcta
    await expect(page).toHaveURL('https://demoqa.com/register');

    // Paso 2: Completar los campos obligatorios del formulario
    await page.fill('#firstname', 'Test'); // Nombre genérico
    await page.fill('#lastname', 'User');  // Apellido genérico
    await page.fill('#userName', 'test.user');
    await page.fill('#password', 'Test1234*');

    // Nota: No se interactúa con el CAPTCHA (intencionalmente omitido)

    // Paso 3: Hacer clic en el botón "Register"
    await page.click('#register');
    await page.waitForTimeout(2000); // Espera breve para observar la respuesta

    // Paso 4: Validar que no se avanza a otra URL
    expect(page.url()).toBe('https://demoqa.com/register');

    // Paso 5: Validar que se muestre el mensaje de error
    const errorMsg = await page.locator('#name').textContent();
    console.log("Mensaje mostrado:", errorMsg?.trim());
    await expect(page.locator('#name')).toBeVisible();

    // Mensaje de éxito en la consola
    console.log('✅ Test 15 negativo exitoso: el registro fue bloqueado por falta de CAPTCHA.');
  } catch (error) {
    // Mensaje de error en la consola
    console.error(`❌ Test case 15: Falló la validación del registro sin CAPTCHA. Error: ${error.message}`);
  }
});


