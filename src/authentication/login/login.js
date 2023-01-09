import { clearMain } from "../../ui/domActions/domActions.js";
import { saveData } from "../../helper/dataStorage.js";
import { signUpUI } from "../signup/signup.js";

const main = document.querySelector('.main');

export function logInUI() {
    const sheet = new CSSStyleSheet();

    // clear main tag and insert sign up form elements
    clearMain();

    main.classList.add('d-flex', 'justify-content-center', 'align-items-center')

    const element = `
    <section class="login d-flex flex-column justify-content-between border rounded bg-light shadow m-5 p-4">
        <p class="fs-4 text-center">Log In</p>
        <form class="mt-3">
            <div class="py-2">
                <label for="username" class="d-block">Username</label>
                <input type="text" name="username" id="username" class="w-100 inputs ps-2">
            </div>

            <div class="py-2 mb-2">
                <label for="password" class="d-block">Password</label>
                <input type="password" name="password" id="password" class="w-100 inputs ps-2">
            </div>

            <input type="button" value="Log In" class="login-btn bg-light border w-100 p-2 mt-5">

            <div>
            Doesn't have any account?
                <input type="button" value="Sign Up" class="user-signup bg-light border-0 text-primary">
            </div>
        </form>
        <div></div>
    </section>
    `;

    main.insertAdjacentHTML('afterbegin', element);

    // add CSS Styles
    sheet.replaceSync(`
        .login{
            width: 24rem;
            height: 26rem;
        }
        div > input {
            border: 1px solid rgba(0, 0, 0, 0.1);
        }
        .inputs {
            height: 2rem;
        }
        body {
            background: rgba(226,226,226, 0.3);
            opacity: 0.8;
            background-size: 20px 20px;
            background-position: 0 0,10px 10px;
        }
        `);

    document.adoptedStyleSheets = [sheet];
}