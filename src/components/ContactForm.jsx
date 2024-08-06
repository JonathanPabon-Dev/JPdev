import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    const data = { name, email, message };
    console.log("Formulario enviado:");
    console.log(data);
  };

  const labelStyles =
    "absolute left-3 text-right font-poppins text-slate-400 peer-valid:-top-5 peer-valid:text-xs peer-focus:-top-5 peer-focus:text-xs peer-*:text-slate-500 dark:text-slate-500 dark:peer-focus:text-slate-300";
  const inputStyles =
    "peer w-full rounded-lg border-2 bg-transparent px-2 py-1 font-poppins text-inherit text-slate-700 focus:outline-none focus:border-slate-500 dark:border-slate-500 dark:text-slate-300 dark:focus:border-slate-300";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-16 flex w-[60%] flex-col items-center gap-8"
    >
      <div className="form-group relative flex w-full items-center">
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputStyles}
        />
        <label htmlFor="name" className={labelStyles}>
          Name
        </label>
      </div>
      <div className="form-group relative flex w-full items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputStyles}
        />
        <label htmlFor="email" className={labelStyles}>
          Email
        </label>
      </div>
      <div className="form-group relative flex w-full items-center">
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={inputStyles}
        />
        <label htmlFor="message" className={labelStyles}>
          Message
        </label>
      </div>
      <button
        type="submit"
        className={`w-fit min-w-32 rounded-full border-2 border-sky-500 px-4 py-2 text-lg font-medium transition-all duration-300 hover:bg-sky-500 hover:text-slate-200 focus:bg-sky-500 focus:text-slate-200 dark:border-sky-300 dark:text-slate-300 dark:hover:bg-sky-300 dark:hover:text-slate-700 dark:focus:bg-sky-300 dark:focus:text-slate-700`}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
