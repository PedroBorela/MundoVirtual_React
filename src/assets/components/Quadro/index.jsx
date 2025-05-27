import React from 'react';
import { Entity } from 'aframe-react';
import { defaultConfig } from './DadosQuadro';



// Função auxiliar para mesclagem profunda de objetos (para configurações)
const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);

const mergeDeep = (target, source) => {
    const output = { ...target };
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
};

const Quadro = ({
    quantidade = 7, // Número de conjuntos principais 
    config: customConfig = {}, // Prop 'config' para todas as personalizações
}) => {
    // Mescla as configurações padrão com as customizadas fornecidas via props
    const config = mergeDeep(defaultConfig, customConfig);

    const { plano, planoFront, planoBack, cubo, layout } = config;
    const { initialX, initialZ, zStep } = layout;

    const elementosGerados = [];


    // Este cubo corresponde ao primeiro elemento do seu array `cubos` original.
    const primeiroCuboX = -initialX;
    const primeiroCuboZ = initialZ - zStep;

    elementosGerados.push(
        <Entity
            key="cubo-inicial-extra"
            primitive="a-box"
            position={`${primeiroCuboX} ${cubo.yPos} ${primeiroCuboZ}`}
            scale={cubo.scale}
            rotate-cube
            muda-cor
        />
    );

    // 2. Gerar os Conjuntos Principais de Quadros
    // Cada conjunto tem um plano frontal, um plano traseiro e um cubo associado.
    for (let i = 0; i < quantidade; i++) {
        const currentX = (i % 2 === 0) ? initialX : -initialX; // Alterna o X
        const currentZ = initialZ + (i * zStep); // Calcula a posição Z
        const rotatitionY = (i % 2 === 0) ? "30" : "-30"; 

        // Plano Frontal
        elementosGerados.push(
            <Entity
                key={`planoFront-${i}`}
                primitive="a-plane"
                htmlClass={plano.className} // Use htmlClass para definir o atributo 'class' em A-Frame via aframe-react
                width={plano.width}
                height={plano.height}
                scale={planoFront.scale}
                rotation={`0 ${rotatitionY} 0`} 
                position={`${currentX} ${plano.yPos} ${currentZ}`}
                material={{ color: planoFront.color }} // Para aframe-react, material é um objeto
            />
        );

        // Plano Traseiro
        elementosGerados.push(
            <Entity
                key={`planoBack-${i}`}
                primitive="a-plane"
                htmlClass={plano.className}
                width={plano.width}
                height={plano.height}
                src={"#borda3"} // Define a textura aqui
                scale={planoBack.scale}
                rotation={`0 ${rotatitionY} 0`} 

                position={`${currentX} ${plano.yPos} ${currentZ + planoBack.zOffset}`}
            // Remova ou ajuste a propriedade material abaixo:
            // material={{ color: planoBack.color }} // <--- Remova esta linha
            />
        );

        // Cubo Correspondente ao conjunto atual
        elementosGerados.push(
            <Entity
                key={`cubo-conjunto-${i}`}
                primitive="a-box"
                position={`${currentX} ${cubo.yPos} ${currentZ}`}
                scale={cubo.scale}
                rotate-cube
                muda-cor
            />
        );
    }

    // Retorna uma única entidade A-Frame que agrupa todos os elementos gerados.
    // Isso pode ser útil para aplicar transformações (posição, rotação, escala)
    // a todo o conjunto de quadros de uma vez, se necessário.
    return (
        <Entity>
            {elementosGerados}
        </Entity>
    );
};

export default Quadro;