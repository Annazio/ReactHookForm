import { useForm } from "react-hook-form";


function App() {

let {
  register, 
  handleSubmit,
  formState: {errors}, 
  reset
} = useForm({mode: 'onSubmit'})

const onSubmit = (data) => {
  console.log(data)
  reset()
}

const firstnameInp = register('firstname', {
                                          required: 'Feld erforderlich',
                                          maxLength: {
                                                     value: 5,
                                                     message: 'Maximal 5 Zeichen'
                                                     }
                                          })


const lastnameInp = register('lastname', {
                                          required: 'Feld erforderlich',
                                          minLength: {
                                            value: 3,
                                            message: 'Minimum 3 Zeichen'
                                          }
                                        })

const loginInp = register('login', {
                                    required: 'Feld erforderlich',
                                    pattern: {
                                      value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
                                      message: 'Ungültige E-Mail Adresse'
                                    }
                                  })

  return (
   <div>
    <form onSubmit={handleSubmit(onSubmit)}>

       <div>
        <label>
          Vorname:
          <input 
          placeholder="Vorname" 
          {...firstnameInp} />
        </label>
       </div>

       {errors.firstname && <p style={{color: 'red'}}>{errors.firstname.message}</p> }

       <div>
        <label>
          Nachname:
          <input 
          placeholder="Nachname" 
          {...lastnameInp}/>
        </label>
       </div>

       
       {errors.lastname && <p style={{color: 'red'}}>{errors.lastname.message}</p> }

       <div>
        <label>
          Dein Login:
          <input 
          placeholder="E-Mail eingeben" 
          {...loginInp}/>
        </label>
       </div>

       {errors.login && <p style={{color: 'red'}}>{errors.login.message}</p> }

       <div>
             <input type="submit" />
       </div>

    </form>
   </div>
  );
}

export default App;
