import { NavLink } from "react-router-dom";
import { useProvincia } from "./../../Hooks/useProvincia.hook";
import { Main , Wrapper , Nombre , ContainerProvincia , Grid } from "../../Styled/Components.styled";
import Ciudad from "../Ciudad/Ciudad";

const PortadaProvincia = ({ idProv }) => {

    const { data } = useProvincia( idProv );
    data !== null && console.log( data );

    return (
        <>
            <Main>
                <Wrapper>
                    <ContainerProvincia>
                        <Nombre size="2em">{ data !== null && data.provincia.NOMBRE_PROVINCIA }</Nombre>
                        <Grid>
                            {
                                data !== null && data.ciudades.map( cadaCiudad => {
                                    return (
                                        <NavLink to={`/municipio/${cadaCiudad.idProvince}/${cadaCiudad.id}`}>
                                            <Ciudad ciudad={ cadaCiudad } />
                                        </NavLink>
                                    )
                                })
                            }
                        </Grid>
                    </ContainerProvincia>
                </Wrapper>
            </Main>
        </>
    )
}

export default PortadaProvincia;