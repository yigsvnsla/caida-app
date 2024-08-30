import Form from 'next/form'

import { createTable } from '../shared/actions/create-table.action';
import { joinTable } from '../shared/actions/join-table.action';
import { GlobeAltIcon } from '../shared/icons/globe-alt.icon';
import { FormButton } from '../shared/components/form-button';
import { UserIcon } from '../shared/icons/user.icon';
import { Select } from '../shared/components/select';
import { Input } from "../shared/components/input"

export function RoomIndex() {

  return (
    <div className="flex w-full ">
      <div className="card bg-base-300 rounded-box grid flex-grow place-items-center">
        <div className="card-body">
          <h2 className="card-title capitalize">Crear una nueva mesa</h2>
          <p>Puedes crear una nueva sala de juego para compartir con tus amigos</p>
          <Form className='space-y-2' action={createTable}>

            <Input className="input input-bordered flex items-center gap-2 w-full max-w-xs " >
              <UserIcon outline className="h-4 w-4 opacity-70" />
              <Input.Prompt defaultValue={"player_host"} required name='username' type="text" className="grow " placeholder="Username" />
            </Input>

            <Select required name='mode' defaultValue={2} className="select select-bordered w-full max-w-xs">
              <Select.Option value={0} disabled >Modo de Juego</Select.Option>
              <Select.Option value={1} >Clasico</Select.Option>
              <Select.Option value={2} >Completo</Select.Option>
            </Select>

            <Select required name='players' defaultValue={2} className="select select-bordered w-full max-w-xs">
              <Select.Option value={0} disabled >Cantidad de Jugadores</Select.Option>
              <Select.Option value={2}>2</Select.Option>
              <Select.Option value={3}>3</Select.Option>
              <Select.Option value={4}>4</Select.Option>
            </Select>

            <div className="card-actions justify-end my-4">
              <FormButton className='capitalize btn-primary'>crear mesa</FormButton>
            </div>

          </Form>
        </div>
      </div>
      <div className="divider divider-horizontal">o</div>
      <div className="card bg-base-300 rounded-box grid flex-grow place-items-center">
        <div className="card-body">
          <h2 className="card-title capitalize">Unirme a una mesa</h2>
          <p className="lowercase">Para Unirte a una sala de juego existente coloca el id de la sala a ingresar</p>
          <Form className='space-y-2' action={joinTable}>
            <Input className="input input-bordered flex items-center gap-2 w-full max-w-xs" >
              <UserIcon outline className="h-4 w-4 opacity-70" />
              <Input.Prompt required name='username' type="text" className="grow " placeholder="Username" />
            </Input>

            <Input className="input input-bordered flex items-center gap-2 w-full max-w-xs" >
              <GlobeAltIcon outline className="h-4 w-4 opacity-70" />
              <Input.Prompt required name='room' type="text" className="grow " placeholder="Id Room" />
            </Input>

            <div className="card-actions justify-end">
              <FormButton className='capitalize btn-primary'>unirse</FormButton>
            </div>
          </Form>
        </div>
      </div>
    </div >

  );
}