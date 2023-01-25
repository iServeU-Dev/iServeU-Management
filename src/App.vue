<template>
  <nav>
    <router-view/>
  </nav>
</template>
<script>
export default {

}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    outline: 0;
    appearance: none;
    border: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
  }
  html {
    font-size: 14px;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    /* Editable */
    font-size: 0.88rem;
    background-color: var(--color-backround);
    user-select: none;
    overflow-x: hidden;
  }
  :root {
    --color-theme: #b5c6d6;
    --color-theme-trans: #b5c6d6b9;
    --color-theme-dark: #202d39;
    --color-primary: #7380ec;
    --color-white: #fff;
    --color-info-dark: #7d8da1;
    --color-info-light: #dce1eb;
    --color-dark: #363949;
    --color-light: #b5c6d63a;
    --color-light-2: #b5c6d62f;
    --color-primary-variant: #111e88;
    --color-dark-variant: #677483;
    --color-backround: #f6f6f9;

    --color-info: #17a2b8;
    --color-success:  #5cb85c;
    --color-warning:  #f0ad4e;
    --color-danger:  #d9534f;

    --linear-grad: linear-gradient(to right, #141E30, #243B55);
    --grad-clr1: #141E30;
    --grad-clr2: #243B55;
    
    --card-border-radius: 2rem;
    --border-radius-1: 0.4rem;
    --border-radius-2: 0.8rem;
    --border-radius-3: 1.2rem;

    --card-padding: 1.8rem;
    --padding-1: 1.2rem;

    --box-shadow: 0 0 4rem var(--color-theme);
  }
  .modal {
    position: fixed; /* Stay in place */
    z-index: 5; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  .modal__content {
    background-color: #fefefe;
    margin: 5% auto; /* 15% from the top and centered */
    padding: 20px;
    width: 60%; /* Could be more or less, depending on screen size */
    border-radius: 1rem;
  }
  .cont__header {
    border-bottom: 2px solid var(--color-primary);
  }
  .box{
    margin-top: 1rem;
    border: 1px solid var(--color-theme);
    border-radius: var(--border-radius-1)
  }
  .box__header {
      color: var(--color-theme);
      background-color: #b5c6d679;
      padding: 1rem;
      border-bottom: 2px solid var(--color-theme);
      display: grid;
      justify-content: left;
  }
  .box__container {
      padding: 1.5rem;
      display:grid;
      grid-template-columns: repeat(2, 50%);
  }
  .box__container-priv {
    padding: 1.5rem;
    display: grid;
    grid-template-columns: repeat(3,auto);
  }
  .cont__btns {
    margin: 1rem 0.5rem 0 0;
    display: flex;
    flex-direction: row-reverse;
  }
  .cont__btns button {
    cursor: pointer;
    margin: 0.2rem;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    color: white;
  }
  .box__container--field {
    display: grid;
    grid-template-rows: repeat(2, auto);
  }
  .input_enabled {
    padding: 0.5rem;
    border: 1px solid rgba(60, 60, 60, .26);
    border-radius: 3px;
    margin: 0.2rem 2.5rem 0.5rem 0;
  }
  .check {
    display: grid;
  }
  .check_b {
    grid-row-start: 1;
    grid-column-start: 1;
    justify-self: start;
    height: 2.5rem;
    width: 2.5rem;
    z-index: 6;
    margin-left: 0.3rem;
    opacity: 0;
    cursor: pointer;
  }
 .cont {
  padding: 2rem;
 }
 .icon__primary {
        fill: var(--color-primary);
        margin-left: 0.3rem;
        grid-row-start: 1;
    grid-column-start: 1;
    height: 2.5rem;
    width: 2.5rem;
  }
 .icon__success {
        fill: var(--color-success);
        margin-left: 0.3rem;
        grid-row-start: 1;
    grid-column-start: 1;
    height: 2.5rem;
    width: 2.5rem;
  }
  .icon__danger {
      fill: var(--color-danger);
      margin-left: 0.3rem;
      grid-row-start: 1;
    grid-column-start: 1;
    height: 2.5rem;
    width: 2.5rem;
  }
  .icon__warning {
      fill: var(--color-warning);
      margin-left: 0.3rem;
      grid-row-start: 1;
    grid-column-start: 1;
    height: 2.5rem;
    width: 2.5rem;
  }
  .success {
    background: var(--color-success);
  }
  .warning {
    background: var(--color-warning);
  }
  .danger {
    background: var(--color-danger);
  }
@media only screen and (max-width: 768px) {

  .cont {
    padding: 0.5rem;
  }
  .modal__content {
    background-color: #fefefe;
    margin: 10% auto; /* 15% from the top and centered */
    padding: 1rem;
    width: 100%; /* Could be more or less, depending on screen size */
    border-radius: 5px;
  }
  .box__container {
      padding: 0.5rem;
      display:grid;
      grid-template-columns: 1fr;
  }
}
</style>
