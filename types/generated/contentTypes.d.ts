import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: 'Sobre';
    description: 'Write about yourself and the content you create';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String;
    blocks: Attribute.DynamicZone<['shared.media', 'shared.rich-text']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles';
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'Artigo';
    description: 'Create your blog content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    slug: Attribute.UID<'api::article.article', 'title'> & Attribute.Required;
    cover: Attribute.Media & Attribute.Required;
    author: Attribute.Relation<
      'api::article.article',
      'manyToOne',
      'api::author.author'
    >;
    category: Attribute.Relation<
      'api::article.article',
      'manyToOne',
      'api::category.category'
    >;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'Markdown';
          preset: 'rich';
        }
      >;
    blocks: Attribute.DynamicZone<
      [
        'shared.media',
        'shared.rich-text',
        'shared.slider',
        'shared.quote',
        'shared.video'
      ]
    >;
    Tags: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Not\u00EDcias',
          'Atualidades',
          'Jornalismo',
          'Mundo',
          'Pol\u00EDtica',
          'Economia',
          'Tecnologia',
          'Sa\u00FAde',
          'BemEstar',
          'Fitness',
          'Nutri\u00E7\u00E3o',
          'Medicina',
          'Doen\u00E7as',
          'Ci\u00EAncia',
          'Inova\u00E7\u00E3o',
          'Espa\u00E7o',
          'Cibern\u00E9tica',
          'EstiloDeVida',
          'Moda',
          'Viagens',
          'Culin\u00E1ria',
          'Cultura',
          'Arte',
          'Educa\u00E7\u00E3o',
          'Aprendizado',
          'Ensino',
          'Universidade',
          'Cursos',
          'Entretenimento',
          'Cinema',
          'M\u00FAsica',
          'TV',
          'Celebridades',
          'Livros',
          'Neg\u00F3cios',
          'Finan\u00E7as',
          'Investimentos',
          'MercadoFinanceiro',
          'Carreira',
          'MeioAmbiente',
          'Sustentabilidade',
          'EcoAmig\u00E1vel',
          'Conserva\u00E7\u00E3o',
          'Mudan\u00E7asClim\u00E1ticas',
          'Reciclagem',
          'Tutorial',
          'Guia',
          'PassoAPasso',
          'Dicas',
          'ComoFazer',
          'Instru\u00E7\u00F5es',
          'Hist\u00F3ria',
          'Patrim\u00F4nioCultural',
          'Tradi\u00E7\u00F5es',
          'Religi\u00E3o',
          'DesenvolvimentoPessoal',
          'Autoestima',
          'Motiva\u00E7\u00E3o',
          'MentalidadePositiva',
          'Felicidade',
          'Esportes',
          'Futebol',
          'Basquete',
          'Corrida',
          'EsportesRadicias',
          'Olimp\u00EDadas',
          'Tend\u00EAncias',
          'TecnologiasEmergentes',
          'Futuro',
          'Tend\u00EAnciasdeMercado',
          'Disrup\u00E7\u00E3o',
          'Natureza',
          'ViagensAventura',
          'Animais',
          'Pets',
          'C\u00E3es',
          'Gatos',
          'AnimaisdeEstima\u00E7\u00E3o',
          'Conselhos',
          'GuiadeCompra',
          'Alimenta\u00E7\u00E3o',
          'Receitas',
          'Cerveja',
          'Vinho',
          'Cocktails',
          'VidaNoturna',
          'Hobbies',
          'Passatempos',
          'Artesanato',
          'DIY',
          'Beleza',
          'Cuidadoscomapele',
          'Maquiagem',
          'Haircare',
          'BelezaNatural',
          'ComidaSaud\u00E1vel',
          'ReceitasSaud\u00E1veis',
          'Dieta',
          'PerdaDePeso',
          'Alimenta\u00E7\u00E3oSaud\u00E1vel',
          'AutoCuidado',
          'Relacionamentos',
          'Amor',
          'Namoro',
          'Casamento',
          'Fam\u00EDlia',
          'PaisEFilhos',
          'Amizade',
          'Conflitos',
          'Casais',
          'ConselhosdeRelacionamento',
          'ConselhosFinanceiros',
          'InvestimentoPessoal',
          'Or\u00E7amento',
          'EconomiaDom\u00E9stica',
          'Finan\u00E7asPessoais',
          'Dinheiro',
          'MercadoDeA\u00E7\u00F5es',
          'Educa\u00E7\u00E3oFinanceira',
          'Carreiras',
          'DesenvolvimentoProfissional',
          'EntrevistaDeEmprego',
          'Networking',
          'Lideran\u00E7a',
          'Empregabilidade',
          'Produtividade',
          'TrabalhoRemoto',
          'EmpreendedorismoSocial',
          'Startups',
          'MarketingDigital',
          'SEO',
          'PublicidadeOnline',
          'E-mailMarketing',
          'Branding',
          'Neg\u00F3ciosOnline',
          'Gest\u00E3o',
          'Gest\u00E3oDeProjetos',
          'Lideran\u00E7aDeEquipe',
          'TomadaDeDecis\u00E3o',
          'Estrat\u00E9giaEmpresarial',
          'Inova\u00E7\u00E3oTecnol\u00F3gica',
          'Rob\u00F3tica',
          'AprendizadoDeM\u00E1quina',
          'InternetDasCoisas',
          'Programa\u00E7\u00E3o',
          'DesenvolvimentoWeb',
          'Seguran\u00E7aCibern\u00E9tica',
          'Blockchain',
          'Gaming',
          'JogosOnline',
          'Consoles',
          'Ind\u00FAstriaDoEntretenimento',
          'CulturaPop',
          'CinemaCl\u00E1ssico',
          'FilmesDeA\u00E7\u00E3o',
          'Drama',
          'Com\u00E9dia',
          'Suspense',
          'Terror',
          'Romance',
          'Fantasia',
          'LiteraturaCl\u00E1ssica',
          'AutoresFamosos',
          'Poesia',
          'Leitura',
          'Educa\u00E7\u00E3oArt\u00EDstica',
          'Museus',
          'Arquitetura',
          'Design',
          'ArteContempor\u00E2nea',
          'ArteAbstrata',
          'Fotografia',
          'Teatro',
          'Dan\u00E7a',
          'M\u00FAsicaCl\u00E1ssica',
          'InstrumentosMusicais',
          'Bandas',
          'Concertos',
          'FestivaldeM\u00FAsica',
          'Compositores',
          'Hist\u00F3riaDaM\u00FAsica',
          'AutoresLiter\u00E1rios',
          'Hist\u00F3riaAntiga',
          'IdadeM\u00E9dia',
          'Renascimento',
          'EraVitoriana',
          'GuerraMundial',
          'Hist\u00F3riaAmericana',
          'Explora\u00E7\u00E3oEspacial',
          'Civiliza\u00E7\u00F5esAntigas',
          'Religi\u00F5esDoMundo',
          'Filosofia',
          'Psicologia',
          'Sociologia',
          'Antropologia',
          'MeioAmbienteNatural',
          'DesastresNaturais',
          'Conserva\u00E7\u00E3oDaNatureza',
          'AquecimentoGlobal',
          'Biodiversidade',
          'RecursosNaturais',
          'EnergiaRenov\u00E1vel',
          'SistemasEcol\u00F3gicos',
          'VidaSelvagem',
          'ViagensDeAventura',
          'DestinosEx\u00F3ticos',
          'Cidades',
          'CulturaLocal',
          'DicasDeViagem',
          'Hot\u00E9is',
          'Acomoda\u00E7\u00F5es',
          'ComidaDoMundo',
          'GastronomiaLocal',
          'ReceitasRegionais',
          'Experi\u00EAnciasDeViagem',
          'Atra\u00E7\u00F5esTur\u00EDsticas',
          'ArquiteturaHist\u00F3rica',
          'NaturezaSelvagem',
          'Praias',
          'Montanhas',
          'Trilhas',
          'EsportesAoArLivre',
          'AventurasAqu\u00E1ticas',
          'ViagensDeMochila',
          'ViagensDeCamping',
          'DicasDePlanejamento',
          'DestinosRom\u00E2nticos',
          'ViagensEmFam\u00EDlia',
          'DicasDeOr\u00E7amento',
          'DicasDeSeguran\u00E7a',
          'DicasDeEmbalagem',
          'Festivais',
          'Eventos',
          'Cerim\u00F4nias',
          'ArtesC\u00EAnicas',
          'MuseusDeArte',
          'Exposi\u00E7\u00F5es',
          'Hist\u00F3riaDaArte',
          'DesignDeInteriores',
          'ArtesPl\u00E1sticas',
          'FotografiaArt\u00EDstica',
          'Dan\u00E7aContempor\u00E2nea',
          'Ballet',
          '\u00D3pera',
          'M\u00FAsicaEletr\u00F4nica',
          'Rock',
          'HipHop',
          'Jazz',
          'Blues',
          'Metal',
          'Country',
          'Reggae',
          'Folk',
          'Cl\u00E1ssicos',
          'TeoriaMusical',
          'AulasDeM\u00FAsica',
          'ConcertosAoVivo',
          'ResenhasDeM\u00FAsica',
          'CompositoresCl\u00E1ssicos',
          'AutoresLiter\u00E1riosFamosos',
          'RomanceHist\u00F3rico',
          'Fic\u00E7\u00E3oCient\u00EDfica',
          'Fantasia\u00C9pica',
          'Mist\u00E9rio',
          'Aventura',
          'PoesiaModerna',
          'Contos',
          'LeituraRecomendada',
          'ResenhasLiter\u00E1rias',
          'EscritaCriativa',
          'LivrosInfantis',
          'LivrosDeN\u00E3oFic\u00E7\u00E3o',
          'AutoresContempor\u00E2neos',
          'AutoresCl\u00E1ssicos',
          'LiteraturaComparada',
          'LivrosDeAutoajuda',
          'Filosofia',
          '\u00C9tica',
          '\u00C9ticaEmpresarial',
          '\u00C9ticaM\u00E9dica',
          'FilosofiaPol\u00EDtica',
          'FilosofiaDaMente',
          '\u00C9ticaProfissional',
          'GrandeFil\u00F3sofos',
          'ConceitosFilos\u00F3ficos',
          'PsicologiaCl\u00EDnica',
          'PsicologiaEducacional',
          'PsicologiaSocial',
          'Terapia',
          'ComportamentoHumano',
          'Intelig\u00EAnciaEmocional',
          'DesenvolvimentoInfantil',
          'Personalidade',
          'ConflitosPsicol\u00F3gicos',
          'Rela\u00E7\u00F5esFamiliares',
          'Rela\u00E7\u00F5esInterpessoais',
          'ComportamentoDoConsumidor',
          'CulturaSocietal',
          'TeoriaSociol\u00F3gica',
          'Mudan\u00E7aSocial',
          'ComportamentoSocial',
          'IdentidadeCultural',
          'CulturaPopular',
          'Globaliza\u00E7\u00E3o',
          'AntropologiaCultural',
          'AntropologiaSocial',
          'Arqueologia',
          'ArqueologiaMundial',
          'Escava\u00E7\u00F5es',
          'Civiliza\u00E7\u00F5esPerdidas',
          'FilosofiaReligiosa',
          'Espiritualidade',
          'Teologia',
          '\u00C9ticaReligiosa',
          'Ate\u00EDsmo',
          'Religi\u00F5esAntigas',
          'F\u00E9',
          'RituaisReligiosos',
          'Hist\u00F3riaDasReligi\u00F5es',
          'Cristianismo',
          'Islamismo',
          'Juda\u00EDsmo',
          'Budismo',
          'Hindu\u00EDsmo',
          'Xamanismo',
          'Paganismo',
          'Religi\u00F5esAfricanas',
          'Pol\u00EDticaMundial',
          'SistemasPol\u00EDticos',
          'Governo',
          'Democracia',
          'Ditadura',
          'DireitosHumanos',
          'Pol\u00EDticaExterna',
          'Lideran\u00E7aPol\u00EDtica',
          'PartidosPol\u00EDticos',
          'Elei\u00E7\u00F5es',
          'Geopol\u00EDtica',
          'ConflitosInternacionais',
          'Seguran\u00E7aNacional',
          'Pol\u00EDticaEcon\u00F4mica',
          'Pol\u00EDticaSocial',
          'Pol\u00EDticaAmbiental',
          'Pol\u00EDticaDeSa\u00FAde',
          'Pol\u00EDticaDeEduca\u00E7\u00E3o',
          'Pol\u00EDticaDeImigra\u00E7\u00E3o',
          'Pol\u00EDticaDeTecnologia',
          'Pol\u00EDticaCultural',
          'EconomiaGlobal',
          'MercadosEmergentes',
          'DesigualdadeEcon\u00F4mica',
          'Com\u00E9rcioInternacional',
          'Globaliza\u00E7\u00E3oEcon\u00F4mica',
          'EconomiaSustent\u00E1vel',
          'MoedasVirtuais',
          'Empreendedorismo',
          'Inova\u00E7\u00E3oEmpresarial',
          'Estrat\u00E9giaDeNeg\u00F3cios',
          'MarketingDeNeg\u00F3cios',
          'Estrat\u00E9giaDeMarketing',
          'Estrat\u00E9giaDeVendas',
          'Gest\u00E3oEmpresarial',
          'RecursosHumanos',
          'Negocia\u00E7\u00E3o',
          'Gest\u00E3oFinanceira',
          'Contabilidade',
          'TecnologiaDaInforma\u00E7\u00E3o',
          'Software',
          'Hardware',
          'Intelig\u00EAnciaDeNeg\u00F3cios',
          'Seguran\u00E7aDaInforma\u00E7\u00E3o',
          'Tend\u00EAnciasTecnol\u00F3gicas',
          'TecnologiaM\u00F3vel',
          'DesenvolvimentoDeAplicativos',
          'RedesSociais',
          'Estrat\u00E9giaDigital',
          'TecnologiaEmergente',
          'TecnologiaDoFuturo',
          'Ci\u00EAnciaDoComputador',
          'Internet',
          'Ciberseguran\u00E7a',
          'Nanotecnologia',
          'EnergiaLimpa',
          'TecnologiaMedica',
          'Intelig\u00EAnciaArtificial',
          'MachineLearning',
          'Automatiza\u00E7\u00E3o',
          'TecnologiaEspacial',
          'Astronomia',
          'ViagensEspaciais',
          'Astron\u00E1utica',
          'AstronomiaAmadora',
          'AstronomiaProfissional',
          'Cosmologia',
          'AstronomiaAntiga',
          'AstronomiaModerna',
          'Biologia',
          'Gen\u00E9tica',
          'BiologiaMarinha',
          'Ecologia',
          'Zoologia',
          'Bot\u00E2nica',
          'Microbiologia',
          'Paleontologia',
          'Sa\u00FAdeMental',
          'Depress\u00E3o',
          'Ansiedade',
          'Estresse',
          'AutoAjuda',
          'Psicoterapia',
          'MedicinaAlternativa',
          'Doen\u00E7asMentais',
          'TranstornosAlimentares',
          'V\u00EDcio',
          'Aconselhamento',
          'TerapiaFamiliar',
          'TerapiaDeCasais',
          'TerapiaCognitivoComportamental',
          'Educa\u00E7\u00E3oEspecial',
          'Educa\u00E7\u00E3oInfantil',
          'Educa\u00E7\u00E3oSuperior',
          'Educa\u00E7\u00E3oOnline',
          'AprendizadoOnline',
          'TecnologiaEducacional',
          'Avalia\u00E7\u00E3oEducacional',
          'Curr\u00EDculoEscolar',
          'Ensino\u00C0Dist\u00E2ncia',
          'HabilidadesDeAprendizado',
          'Educa\u00E7\u00E3oInclusiva',
          'Universidades',
          'Faculdades',
          'Gradua\u00E7\u00E3o',
          'P\u00F3sGradua\u00E7\u00E3o',
          'EnsinoFundamental',
          'EnsinoM\u00E9dio',
          'Educa\u00E7\u00E3oPrim\u00E1ria',
          'Professores',
          'Estudantes',
          'AprendizadoDeIdiomas',
          'Educa\u00E7\u00E3oTecnol\u00F3gica',
          'CursosOnline',
          'AprendizadoPersonalizado',
          'Educa\u00E7\u00E3oEmCasa',
          'Educa\u00E7\u00E3oCorporativa',
          'TreinamentoDeFuncion\u00E1rios',
          'DesenvolvimentoDeCarreira',
          'AprendizadoCont\u00EDnuo',
          'AprendizadoExperiencial',
          'AprendizadoInterativo',
          'M\u00EDdiaDigital',
          'M\u00EDdiasSociais',
          'MarketingDeConte\u00FAdo',
          'JornalismoDigital',
          'Produ\u00E7\u00E3oDeV\u00EDdeo',
          'Podcast',
          'Blogging',
          'Reda\u00E7\u00E3o',
          'FotografiaDigital',
          'ArtesDigitais',
          'DesignGr\u00E1fico',
          'WebDesign',
          'Edi\u00E7\u00E3oDeV\u00EDdeo',
          'MarketingDeM\u00EDdiaSocial',
          'InfluenciadoresDigitais',
          'Tend\u00EAnciasDeM\u00EDdia',
          'Com\u00E9rcioEletr\u00F4nico',
          'MarketingDeAfiliados',
          'Estrat\u00E9giaDeMarca',
          'Gest\u00E3oDeMarcas',
          'PublicidadeDigital',
          'TecnologiaDePublicidade',
          'PublicidadeDeM\u00EDdiaSocial',
          'MarketingDeEmail',
          'Reda\u00E7\u00E3oPublicit\u00E1ria',
          'PesquisaDeMercado',
          'Estrat\u00E9giaDePublicidade',
          'M\u00EDdiaImpressa',
          'V\u00EDdeoMarketing'
        ]
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Schema.CollectionType {
  collectionName: 'authors';
  info: {
    singularName: 'author';
    pluralName: 'authors';
    displayName: 'Autor';
    description: 'Create authors for your content';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    avatar: Attribute.Media;
    email: Attribute.String;
    articles: Attribute.Relation<
      'api::author.author',
      'oneToMany',
      'api::article.article'
    >;
    Instagram: Attribute.String & Attribute.DefaultTo<'@user_name'>;
    Discord: Attribute.String;
    Medium: Attribute.String;
    Pinterest: Attribute.String;
    Snapchat: Attribute.String;
    TikTok: Attribute.String;
    Twitter: Attribute.String;
    YouTube: Attribute.String;
    Whatsapp: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Categoria';
    description: 'Organize your content into categories';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::category.category', 'name'>;
    articles: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::article.article'
    >;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'Global';
    description: 'Define global settings';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    siteName: Attribute.String & Attribute.Required;
    favicon: Attribute.Media;
    siteDescription: Attribute.Text & Attribute.Required;
    defaultSeo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSlugifySlug extends Schema.CollectionType {
  collectionName: 'slugs';
  info: {
    singularName: 'slug';
    pluralName: 'slugs';
    displayName: 'slug';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    slug: Attribute.Text;
    count: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    avatar: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCommentsComment extends Schema.CollectionType {
  collectionName: 'comments_comment';
  info: {
    tableName: 'plugin-comments-comments';
    singularName: 'comment';
    pluralName: 'comments';
    displayName: 'Comment';
    description: 'Comment content type';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    blockedThread: Attribute.Boolean & Attribute.DefaultTo<false>;
    blockReason: Attribute.String;
    authorUser: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    authorId: Attribute.String;
    authorName: Attribute.String;
    authorEmail: Attribute.Email;
    authorAvatar: Attribute.String;
    isAdminComment: Attribute.Boolean;
    removed: Attribute.Boolean;
    approvalStatus: Attribute.String;
    related: Attribute.String;
    reports: Attribute.Relation<
      'plugin::comments.comment',
      'oneToMany',
      'plugin::comments.comment-report'
    >;
    threadOf: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'plugin::comments.comment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCommentsCommentReport extends Schema.CollectionType {
  collectionName: 'comments_comment-report';
  info: {
    tableName: 'plugin-comments-reports';
    singularName: 'comment-report';
    pluralName: 'comment-reports';
    displayName: 'Reports';
    description: 'Reports content type';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    content: Attribute.Text;
    reason: Attribute.Enumeration<['BAD_LANGUAGE', 'DISCRIMINATION', 'OTHER']> &
      Attribute.Required &
      Attribute.DefaultTo<'OTHER'>;
    resolved: Attribute.Boolean & Attribute.DefaultTo<false>;
    related: Attribute.Relation<
      'plugin::comments.comment-report',
      'manyToOne',
      'plugin::comments.comment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::comments.comment-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::comments.comment-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'api::about.about': ApiAboutAbout;
      'api::article.article': ApiArticleArticle;
      'api::author.author': ApiAuthorAuthor;
      'api::category.category': ApiCategoryCategory;
      'api::global.global': ApiGlobalGlobal;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::slugify.slug': PluginSlugifySlug;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::comments.comment': PluginCommentsComment;
      'plugin::comments.comment-report': PluginCommentsCommentReport;
    }
  }
}
