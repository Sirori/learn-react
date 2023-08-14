function SwitchButton() {

  function handleButton (){
    const switcher = document.querySelector('.buttonHandler');
    switcher.classList.toggle('active')
  }

  return (
    <button type='button' className='switchButton' onClick={handleButton}>
      <span className="buttonHandler"></span>
    </button>
  )
}

export default SwitchButton