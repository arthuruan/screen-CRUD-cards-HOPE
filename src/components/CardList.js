import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../styles/createCards.css';
import '../styles/cards.css';
import '../styles/global.css';
import '../styles/cardDicas.css';
import '../styles/cardFatos.css';
import '../styles/cardMotivacional.css';

import dicasIcon from '../icons/dicasIcon.png';
import fatosIcon from '../icons/fatos.png';
import motivacionalIcon from '../icons/motivacional.png';
import points from '../icons/3points.png';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    minWidth: 180,
  }
}));

function addCardAction (typeId, text, title, id) {
  return { type: 'ADD_CARD', typeId, text, title, id };
}

export default function CardList() {
  const classes = useStyles();
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();

  const [CardText, setCardText] = useState(null);
  const [CardType, setCardType] = useState(null);
  const [CardTitle, setCardTitle] = useState(null);
  const [Cardid, setCardid] = useState(0);
//menu
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//
  function addCard() {
    if(CardText != '') {
      let id = Cardid;
      id ++;
      setCardid(id);
      dispatch(addCardAction(CardType, CardText, CardTitle, Cardid));
      setCardText('');
      setCardType('');
      setCardTitle('');
    }
  }

  const Editar = () => {
    console.log('Editar');
    setAnchorEl(null);
  }

  const Deletar = () => {
    console.log('Deletar');
    setAnchorEl(null);
  }

  return (
    <div className="container">
      <div className="card-container">
        {/* {console.log(cards)} */}
        <ul>
          { cards.map(card => (
              card.typeId === "dicas" && 
              <li className="dicas" key={card.id}>
                <img src={dicasIcon} />
                <div className="dicas-container">
                  <h1>{card.title}</h1>
                  <p>{card.text}</p>
                </div>
                <div className="button-points">
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <img src={points} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: '20ch',
                      },
                    }}
                  >
                    <div className="button-ud">
                      <button onClick={Editar}>
                        Editar
                      </button>

                      <button onClick={Deletar}>
                        Deletar
                      </button>
                    </div>
                  </Menu>
                </div>
              </li>
          ))}
          { cards.map(card => (
              card.typeId === "fatos" && 
              <li className="fatos" key={card.id}>
                <img src={fatosIcon} />
                <div className="fatos-container">
                  <h1>{card.title = 'Curiosidade'}</h1>
                  <p>{card.text}</p>
                </div>
                  <div className="button-points">
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <img src={points} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: '20ch',
                      },
                    }}
                  >
                    <div className="button-ud">
                      <button onClick={Editar}>
                        Editar
                      </button>

                      <button onClick={Deletar}>
                        Deletar
                      </button>
                    </div>
                  </Menu>
                </div>
              </li>
          ))}
          { cards.map(card => (
              card.typeId === "motivacional" && 
              <li className="motivacional" key={card.id}>
                <img src={motivacionalIcon} />
                <p>{card.text}</p>
              </li>
          ))}
        </ul>

    
      </div>

      <div className="create-container">
        
        <font>Criar Cards</font>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="type-card-simple">Tipo</InputLabel>
          <Select
            native
            value={CardType}
            onChange={(e) => setCardType(e.target.value)}
          >
            <option aria-label="None" value="" />
            <option value={'dicas'}>Dicas</option>
            <option value={'fatos'}>Fatos</option>
            <option value={'motivacional'}>Motivacional</option>
          </Select>
        </FormControl>

        {
          (CardType === 'motivacional' || CardType === 'fatos') &&
          <>
            <label htmlFor="textCard">
              Descrição
            </label>

            <input 
              type="text"
              value={CardText}
              onChange={(e) => setCardText(e.target.value)}
            />
          </>
        }

        {
          (CardType === 'dicas') &&
          <>
            <label htmlFor="textCard">
              Título
            </label>

            <input 
              type="text"
              value={CardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
            />

            <label htmlFor="textCard">
              Descrição
            </label>

            <input 
              type="text"
              value={CardText}
              onChange={(e) => setCardText(e.target.value)}
            />
          </>
        }


        <button type="button" onClick={addCard}>
          NOVO CARD
        </button>
      </div>
      
    </div>

  );
}
