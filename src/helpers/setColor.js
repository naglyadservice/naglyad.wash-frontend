function setColor(data, setStatus) {

  switch (data.status) {
    case 'AVAILABLE':
      setStatus(prev => ({
        ...prev,
        text: "Вільна",
        color: "green",
        disabled: false,
      }));
      break;

    case 'BUSY':
      setStatus(prev => ({
        ...prev,
        text: "Зайнята",
        color: "red",
      }));
      break;

    case 'UNAVAILABLE':
      setStatus(prev => ({
        ...prev,
        text: "Не доступна",
        color: "red",
      }));
      break;

    default:
      setStatus(prev => ({
        ...prev,
        text: "Відключена",
        color: "gray",
      }));
  }

}

export { setColor };