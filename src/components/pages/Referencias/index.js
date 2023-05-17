import React, { useState } from "react";
import { View, TouchableOpacity, Text, Animated, Image, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Card() {
  const exercises = [
    {
      title: 'Agachamento',
      links: [
        'https://www.mundoboaforma.com.br/agachamento-livre-como-fazer-e-erros-comuns/',
        'https://www.exercicioemcasa.com.br/agachamento-livre/'
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: 'Skipping',
      links: [
        'https://www.mktpratti.com.br/treinoseducativos/',
        'https://pratiquefitness.com.br/blog/como-e-onde-fazer-skipping-em-bh/'
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: 'Abdominal Borboleta',
      links: [
        'https://www.youtube.com/watch?v=Rdth3eiYxSg',
        'https://blog.queimadiaria.com/abdominais-verdades-e-mitos/'
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Ponte",
      links: [
        'https://www.mundoboaforma.com.br/ponte-para-gluteos-como-fazer-e-erros-comuns/',
        'https://fisiostudio.wordpress.com/2014/04/01/os-beneficio-da-ponte/',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Agachamento com Salto",
      links: [
       'https://www.mundoboaforma.com.br/agachamento-com-salto-para-pernas-e-panturrilhas-como-fazer-e-erros-comuns/',
       'https://www.nit.pt/fit/09-06-2016-operacao-praia-2017-plano-de-treino-para-estar-em-forma-no-proximo-ano/attachment/5816',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Tríceps no Banco",
      links: [
        'https://www.mundoboaforma.com.br/triceps-apoiado-no-banco-usando-so-o-peso-do-corpo-como-fazer-e-erros-comuns/',
        'https://movimente.me/exercicio/triceps-mergulho-c-banco/',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Salto com corda",
      links: [
        'https://www.mundoboaforma.com.br/como-pular-corda-e-erros-comuns/',
        'https://www.nit.pt/fit/09-06-2016-operacao-praia-2017-plano-de-treino-para-estar-em-forma-no-proximo-ano/attachment/5823',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Prancha",
      links: [
        'https://newlabsvita.com.br/7-coisas-que-acontecem-quando-voce-comeca-a-fazer-prancha-todos-os-dias/',
        'https://runnersworld.com.br/quanto-tempo-devo-ficar-na-posicao-de-prancha/',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Panturrilha em pé",
      links: [
        'https://www.hipertrofia.org/blog/2023/03/28/elevacao-de-panturrilhas-em-pe/',
        'https://www.tuasaude.com/exercicios-para-panturrilha/',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Agachamento Isométrico",
      links: [
        'https://treinomestre.com.br/agachamento-isometrico/',
        'https://www.boraserfitness.com.br/4-exercicios-isometricos-para-construir-musculos/',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Polichinelo",
      links: [
        'https://www.mundoboaforma.com.br/polichinelos-como-fazer-e-erros-comuns/',
        'https://runnersworld.com.br/renda-ao-hiit/jumping-jack_1000/',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Avanço",
      links: [
        'https://www.mundoboaforma.com.br/exercicio-afundo-no-smith-halteres-livre-beneficios-e-como-fazer/',
        'https://br.pinterest.com/pin/328481366565259881/',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
    {
      title: "Mobilidade de Escápula",
      links: [
        'https://www.exerciciofisico.com/novos',
        'https://lpfbrasil.com.br/a-chave-esquecida-durante-o-treinamento-abdominal/',
      ],
      isDescriptionVisible: useState(false),
      descriptionHeight: useState(new Animated.Value(0))
    },
  ]
  const toggleDescription = (index) => {
    const [isDescriptionVisible, setDescriptionVisible] = exercises[index].isDescriptionVisible;
    const [descriptionHeight, setDescriptionHeight] = exercises[index].descriptionHeight;
  
    if (isDescriptionVisible) {
      Animated.timing(descriptionHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setDescriptionVisible(false));
    } else {
      setDescriptionVisible(true);
      Animated.timing(descriptionHeight, {
        toValue: 100, // Desired height of the description
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };
  
  const handleLinkPress = async (url) => {
    await Linking.openURL(url);
  };
  
  return (
    <View>
      {exercises.map((exercise, index) => (
        <TouchableOpacity onPress={() => toggleDescription(index)} key={index}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20, paddingHorizontal: 10 }}>
            <Feather name={exercise.isDescriptionVisible[0] ? "chevron-up" : "chevron-down"} size={24} color="#000" />
            <Text style={{ marginLeft: 10 }}>{exercise.title}</Text>
          </View>
          {exercise.isDescriptionVisible[0] && (
            <View style={{ paddingHorizontal: 20 }}>
              {exercise.links.map((link, linkIndex) => (
                <Text key={linkIndex} style={{ color: 'black', paddingHorizontal: 20, marginLeft: 10, textAlign: 'center' }} onPress={() => handleLinkPress(link)}>
                  {link}
                </Text>
              ))}
            </View>
          )}
          {exercise.isDescriptionVisible[0] && (
            <Animated.View style={{ height: exercise.descriptionHeight[0], paddingHorizontal: 20, marginLeft: 10 }} key={index}>
              {exercise.links.map((link, linkIndex) => (
                <Text key={linkIndex} style={{ color: 'black', marginBottom: 10, textAlign: 'center' }} onPress={() => handleLinkPress(link)}>
                  {link}
                </Text>
              ))}
            </Animated.View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );}