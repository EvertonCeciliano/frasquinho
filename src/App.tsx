import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';

const messages: string[] = [
  "Você está mais perto do seu sonho do que ontem!",
  "Lembre-se: cada esforço vale a pena!",
  "Sua dedicação é incrível!",
  "Acredite em você, você consegue!",
  "Hoje é um ótimo dia para dar mais um passo!",
  "Seu futuro brilhante está esperando por você!",
  "Continue firme, a vitória é sua!",
  "Não desista, cada dia conta!",
  "Você é mais forte do que imagina!",
  "Orgulhe-se de cada conquista, mesmo as pequenas!",
  "O primeiro passo é o mais difícil, continue caminhando!",
  "Sua jornada é tão importante quanto o destino.",
  "Cada pequeno avanço é uma vitória.",
  "Persistência é o caminho para o sucesso.",
  "O esforço de hoje é o sucesso de amanhã.",
  "Acredite no poder dos seus sonhos.",
  "Você é capaz de coisas incríveis!",
  "Grandes coisas estão por vir.",
  "O impossível é apenas uma opinião.",
  "Tenha orgulho de quem você está se tornando.",
  "Cada dia é uma nova chance para melhorar.",
  "Sua força está em continuar, não em desistir.",
  "Um passo de cada vez leva longe.",
  "Não se compare com os outros, apenas com seu eu de ontem.",
  "Você é mais corajoso do que pensa.",
  "Todo progresso é progresso.",
  "Seu esforço não é em vão.",
  "Você está construindo um futuro brilhante.",
  "Tudo é possível com determinação.",
  "Hoje é um bom dia para avançar mais um pouco.",
  "A jornada é longa, mas vale a pena.",
  "Cada dia é uma nova chance para se superar.",
  "Confie no processo.",
  "O aprendizado vem da prática.",
  "Você está no caminho certo.",
  "Cada desafio é uma oportunidade para crescer.",
  "Acredite no seu potencial ilimitado.",
  "Você é capaz de alcançar o que deseja.",
  "Cada escolha nos leva para mais perto do sucesso.",
  "O esforço traz recompensas.",
  "Não tenha medo de falhar, tenha medo de não tentar.",
  "A perseverança é a chave.",
  "Você é o autor da sua própria história.",
  "Cada dia é uma nova página para escrever.",
  "Você tem o poder de transformar sua realidade.",
  "Seu esforço vai valer a pena.",
  "Acredite na sua força.",
  "Você está fazendo um trabalho incrível!",
  "Cada segundo conta na busca dos seus sonhos.",
  "O que você faz hoje molda seu futuro.",
  "Continue, você está quase lá.",
  "Sua determinação é inspiradora.",
  "A cada dia você está mais próximo do seu objetivo.",
  "Você é capaz de coisas grandiosas.",
  "Aproveite cada pequena vitória no caminho.",
  "Nada é impossível para um coração determinado.",
  "Você está crescendo a cada desafio.",
  "Mantenha-se forte e continue!",
  "Cada dificuldade o fortalece.",
  "Você é um vencedor em construção.",
  "O sucesso é uma jornada, não um destino.",
  "Você é mais resiliente do que pensa.",
  "Cada conquista, por menor que seja, importa.",
  "Um passo de cada vez constrói o caminho.",
  "O futuro pertence a quem acredita no poder dos seus sonhos.",
  "Continue acreditando e avançando.",
  "Sua perseverança é sua maior aliada.",
  "Nunca duvide do seu potencial.",
  "Você é único e capaz de fazer a diferença.",
  "A vitória vem para aqueles que persistem.",
  "Seus sonhos merecem seu esforço.",
  "Tenha fé em sua jornada.",
  "Cada esforço traz você mais perto de sua meta.",
  "O amanhã será melhor graças ao que você faz hoje.",
  "Você é mais forte do que qualquer obstáculo.",
  "Sua energia e determinação são admiráveis.",
  "O que importa é o progresso, não a perfeição.",
  "Você é a prova de que a dedicação vale a pena.",
  "Nunca subestime o poder de um pequeno passo.",
  "Continue em frente, sua hora está chegando.",
  "Sua força interior é inesgotável.",
  "Mantenha seu foco e determinação.",
  "Você está onde precisa estar para chegar onde quer.",
  "Você é capaz de superar qualquer desafio.",
  "Toda luta tem sua recompensa.",
  "A cada dia, você se torna uma versão melhor de si.",
  "Acredite que o melhor está por vir.",
  "Seu esforço está construindo um futuro incrível.",
  "O sucesso é uma soma de pequenos esforços diários.",
  "Você é determinado e merece cada conquista.",
  "Seu esforço de hoje é sua vitória de amanhã.",
  "A determinação é o que nos leva além.",
  "O que você faz hoje molda o que você será amanhã.",
  "Continue, você está fazendo um ótimo trabalho.",
  "Seu potencial é maior do que imagina.",
  "Você é um exemplo de determinação.",
  "Cada dia é uma nova chance de conquistar seus sonhos.",
  "Você é mais forte do que qualquer obstáculo.",
  "Você está escrevendo uma história de superação.",
  "A jornada é difícil, mas você é forte o suficiente.",
  "Cada sacrifício está construindo seu futuro.",
  "Acredite, você está no caminho certo.",
  "Você é único e especial.",
  "Nunca subestime seu poder.",
  "Todo esforço tem sua recompensa.",
  "Você é a prova de que a persistência vale a pena.",
  "Seus sonhos são possíveis, continue!"
];

const App: React.FC = () => {
  const [message, setMessage] = useState<string>(messages[0]);
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const handleAddToJar = () => {
   
    const newProgress = Math.min(progress + 10, 100);
    setProgress(newProgress);

    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);

   
    if (newProgress === 100) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); 
    }
  };

  const handleResetJar = () => {
    setProgress(0);
    setMessage(messages[0]); 
    setShowConfetti(false);
  };

  return (
    <div className="App">
      <h1>Frasquinho Virtual de Esperança</h1>
      <div className="jar">
        <div className="jar-content" style={{ height: `${progress}%` }}></div>
      </div>
      <p className="message">🌟 {message} 🌟</p>
      <button onClick={handleAddToJar} disabled={progress >= 100}>
        Adicionar Esperança ao Frasquinho
      </button>
      <button onClick={handleResetJar} disabled={progress === 0}>
        Esvaziar Frasquinho
      </button>
      <p>{progress}% cheio de esperança</p>
      {progress === 100 && <p>🎉 O frasquinho está cheio! Parabéns por todo seu esforço! 🎉</p>}

  
      {showConfetti && <Confetti />}
    </div>
  );
}

export default App;
