import React, {Component} from 'react';
import Contact from "../../component/Contact";

class ShoppingContact extends Component {
    render() {
        return (
            <div className="shoppingContact">
                <h1>Leave an application</h1>

                <form id="shoppingContact" action="" method="post">

                    <fieldset>
                        <input    name='FullName'
                                  placeholder='Введите свое полное имя'
                                  required
                                  type='text'
                                  autoComplete="off"/>
                    </fieldset>
                    <fieldset>
                        <input  name='number'
                                placeholder=' Введите номер телефона'
                                required
                                type='text'
                                autoComplete="off"

                        />
                    </fieldset>

                    <fieldset>
                        <input  name='number'
                                placeholder=' Введите тему'
                                required
                                type='text'
                                autoComplete="off"/>

                    </fieldset>


                    <fieldset>
                                          <textarea    name='message'
                                                       placeholder='Введите сообщение'
                                                       required
                                                       type='textarea' />
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit"
                        >ОТПРАВИТЬ
                        </button>
                    </fieldset>

                </form>

            </div>
        );
    }
}

export default ShoppingContact;