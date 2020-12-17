import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import 'animate.css/animate.min.css';

class Alerta{
  AlertaInfo(alerta){
    store.addNotification({
      id: 'hola',
      title: "Alert!!!",
      message: alerta,
      type: "info",
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
        pauseOnHover: true,
        showIcon: true
      },
    });
  }

  AlertaDanger(alerta){
    store.addNotification({
      id: 'hola',
      title: "Alert!!!",
      message: alerta,
      type: "danger",
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
        pauseOnHover: true,
        showIcon: true
      },
    });
  }

  AlertaSuccess(alerta){
    store.addNotification({
      id: 'hola',
      title: "Alert!!!",
      message: alerta,
      type: "success",
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
        pauseOnHover: true,
        showIcon: true
      },
    });
  }
}

export default new Alerta();