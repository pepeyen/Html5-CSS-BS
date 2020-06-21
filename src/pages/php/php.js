import React, { Component } from 'react';

//Image URL's
import img from "../../img/php.png";

//Components
import Navbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import TechCodeBlock  from '../../comp/tech/TechCodeBlock.js';
import PostFetcher from '../../comp/post-fetcher/PostFetcher';
import Footer from '../../comp/footer/Footer.js';


const info = `
    É uma linguagem de script do lado do servidor de código aberto que pode ser ultilizada junto com HTML para construir aplicações web e sites dinâmicos.A melhor coisa em usar o PHP é que ele é extremamente simples para um iniciante, mas oferece muitos recursos avançados para um programador profissional.
`
const code = `
<!DOCTYPE html>

<a href="../index.php" target="" atl="">Menu</a>

<?php
    echo "<h4>EXERCICIO 5</h4>";
    $alunos = array('Aluno1' => 'Erick' , 'Aluno2' => 'Arthur', 'Aluno3' => 'Vincius', 'Aluno4' => 'Isaac');
    $disciplinas = array('Disciplina1' => 'Matematica', 'Disciplina2' => 'Portugues','Disciplina3' => 'Ingles');
    $notas = array($alunos['Aluno1'] => 95.2, $alunos['Aluno2'] => 88.8, $alunos['Aluno3'] => 100.00, $alunos['Aluno4'] => 80.0);
            
    echo '--------------------Alunos--------------------<br>';
    imprimirArray($alunos);
    echo '------------------Disciplinas-----------------<br>';
    imprimirArray($disciplinas);
    echo '---------------------Notas--------------------<br>';
    imprimirArrayDump($notas);

    function imprimirArray($array)
    {
        foreach ($array as $key) {
            echo $key . '<br>';
        }
    }

    function imprimirArrayDump($array)
    {
        echo '<pre>' , var_dump($array) , '</pre>';
    }

?>
`

class PhpPage extends Component{
    render() {
        return (
            <div className = "php-page">
                <Navbar />
                <TechInfoBar 
                    techUrl = {img} 
                    color = '#7377AD' 
                    info = {info}
                />
                <TechCodeBlock
                    code={code}
                    language="php"
                />
                <div className = "user-posts">
                    <PostFetcher postId = '99' />
                    <PostFetcher postId = '23' />
                    <PostFetcher postId = '39' />
                    <PostFetcher postId = '33' />
                    <PostFetcher postId = '67' />
                    <PostFetcher postId = '78' />
                </div>
                <Footer />
            </div>
        );
    }
}

export default PhpPage;