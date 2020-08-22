import React, { Component } from 'react';

//Image URL's
import img from "../../assets/php.png";

//Components
import Navbar from '../../components/Navbar';
import TechInfoBar from '../../components/Tech/TechInfoBar';
import TechCodeBlock  from '../../components/Tech/TechCodeBlock';
import PostFetcher from '../../components/Posts';
import Footer from '../../components/Footer';


const info = `
PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.
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
                <Navbar language="php" />
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