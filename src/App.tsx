import { useForm, SubmitHandler } from 'react-hook-form';
import './App.css';

interface RegForm {
  userName: string;
  age: number;
}

//const values = { userName: 'Vasyl', age: 18 }

function App() {
  const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm<RegForm>({
      mode: "onBlur",
      //mode: "onChange",
      //mode: "onTouched",
      //mode: "all",
      //reValidateMode: "onSubmit",
      //reValidateMode: "onBlur",
      //defaultValues: { userName: 'Kyrylo', age: 25 },
      //values,
      //resetOptions: { keepDirtyValues: true, keepErrors: true },
      //criteriaMode: "all",
      //shouldFocusError: false,
      //delayError: 1000,
  });

  const onSubmit: SubmitHandler<RegForm> = data => {
    console.log(data);
    console.log(values);
    reset() //!потрібно закоментувати, коли перевіряємо reValidateMode
  }

  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        {...register("userName", {
          required: "Введіть ім'я користувача!",
          minLength: {
            value: 5,
            message: "Не менше 5 символів"
          }
        })}
        />
        <div style={{height: 40}}>
          {errors?.userName && <p>{errors?.userName.message}</p>}
        </div>
        <input type="number"
        {...register("age", {
          required: "Введіть вік користувача!",
          min: {
            value: 18,
            message: "Лише для повнолітніх!"
          }
        })}
        />
        <div style={{height: 40}}>
          {errors?.age && <p>{errors?.age.message}</p>}
        </div>
        <input type="submit" disabled={!isValid}/>
      </form>
    </div>
  );
}

export default App;
