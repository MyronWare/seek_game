import React, { useRef } from 'react';
import emailjs from "@emailjs/browser"

const PopUp = ({ time_completion }) => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_p90hcgo", "template_f4mpicg",
            form.current, 'JuJTPUrbeSgcuDVg0')
            .then((result) => { console.log(result.text); },
                (error) => { console.log(error.text); });

        window.location.reload(false);
    };

    return (
        <div className='modal'>
            <div className='overlay'></div>
            <div className="modal-content">
                <form ref={form} onSubmit={sendEmail}>
                    <h4>Ankieta</h4>
                    <p><i>Badanie dotyczy wpływu UX i gier komputerowych na czas reakcji. Wyniki zostaną wykorzystane wyłącznie w
                        celach naukowych. Poniższa ankieta jest w pełni anonimowa. Proszę zatem o szczere odpowiedzi. Serdecznie
                        dziękuję!
                        </i></p>
                    <label>Wiek:
                        <input type="number" name="age" required/>
                    </label>
                    <label>Płeć:
                        <select name="gender">
                            <option value="woman">Kobieta</option>                            
                            <option value="man">Mężczyzna</option>                            
                            <option value="other">Inna</option>                            
                        </select>
                    </label>
                    <label>Wykształcenie:
                        <select name="education">
                            <option value="podstawowe">podstawowe</option>                            
                            <option value="gimnazjalne">gimnazjalne</option>                            
                            <option value="zasadnicze">zasadnicze</option>                            
                            <option value="średnie">średnie</option>                            
                        </select>
                    </label>
                    <label>Problemy ze wzrokiem:
                        <select name="sight_problem">
                            <option value="tak">Tak</option>
                            <option value="nie">Nie</option>                           
                        </select>
                    </label>
                    <label>Jeśli tak, to jakie:
                        <input type="text" name="sight_problem_yes"/>
                    </label>
                    <label>Czy grasz w gry komputerowe?
                        <select name="play_computer_games">
                            <option value="tak">Tak</option>
                            <option value="nie">Nie</option>                           
                        </select>
                    </label>   
                    <label>Jak często grasz w gry komputerowe?
                        <select name="play_computer_games">
                            <option value="1_hour">mniej niż 1 godzinę w tygodniu</option>
                            <option value="2_3_hours">przynajmniej 2-3 godziny w tygodniu</option>                           
                            <option value="2_hours_daily">2 godziny dziennie i więcej</option>                           
                        </select>
                    </label>
                    <label>Kiedy ostatni raz grał•ś w gry komputerowe?
                        <input type="text"/>
                    </label>
                    <input type="hidden" name="timer_count" value={time_completion} />
                    <input className="close-modal" type="submit" value="Finish" />
                </form>
            </div>
        </div>
    )

}

export default PopUp